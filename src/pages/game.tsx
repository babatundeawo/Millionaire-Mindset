import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Sparkles, Loader2 } from 'lucide-react';
import { AnswerButton } from '@/components/AnswerButton';
import { MoneyLadder } from '@/components/MoneyLadder';
import { LifelineButton } from '@/components/LifelineButton';
import { PhoneFriendModal } from '@/components/PhoneFriendModal';
import { AudienceModal } from '@/components/AudienceModal';
import { selectRandomQuestions, getGuaranteedPrize, MONEY_LADDER, formatCurrency } from '@/data/questions';
import type { Question } from '@/data/questions';
import { generateQuestionsWithGroq, getAiQuestionsEnabled } from '@/lib/groq';
import {
  startThinkingMusic,
  stopThinkingMusic,
  playAnswerSelected,
  playCorrect,
  playWrong,
  playLevelUp,
  playSafeHaven,
  playWalkAway,
  playWin,
  playPhoneRing,
  playAudienceReveal,
  setMuted,
  getMuted,
} from '@/hooks/useSound';

type RevealState = 'idle' | 'selected' | 'revealing' | 'correct' | 'wrong';
type LoadStatus = 'loading-ai' | 'ready';

export default function Game() {
  const [, setLocation] = useLocation();
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [loadStatus, setLoadStatus] = useState<LoadStatus>('loading-ai');
  const [usedAiQuestions, setUsedAiQuestions] = useState(false);
  const [aiFallbackNotice, setAiFallbackNotice] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [revealState, setRevealState] = useState<RevealState>('idle');
  const [eliminatedOptions, setEliminatedOptions] = useState<string[]>([]);
  const [usedLifelines, setUsedLifelines] = useState({
    fiftyFifty: false,
    phoneAFriend: false,
    askAudience: false,
  });
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showAudienceModal, setShowAudienceModal] = useState(false);
  const [muted, setMutedState] = useState(() => getMuted());

  // Load the question set once on mount: try Groq if AI mode is enabled
  // and a key is set, otherwise (or on any failure) fall back to the
  // built-in bank so a broken key or offline connection never blocks play.
  const hasLoadedRef = useRef(false);
  useEffect(() => {
    if (hasLoadedRef.current) return;
    hasLoadedRef.current = true;

    const controller = new AbortController();

    async function load() {
      if (getAiQuestionsEnabled()) {
        try {
          const aiQuestions = await generateQuestionsWithGroq({ signal: controller.signal });
          setQuestions(aiQuestions);
          setUsedAiQuestions(true);
          setLoadStatus('ready');
          return;
        } catch (err) {
          if (controller.signal.aborted) return;
          const message = err instanceof Error ? err.message : 'Unknown error generating questions.';
          setAiFallbackNotice(`AI question generation failed (${message}) — using built-in questions instead.`);
        }
      }
      setQuestions(selectRandomQuestions());
      setUsedAiQuestions(false);
      setLoadStatus('ready');
    }

    load();
    return () => controller.abort();
  }, []);

  // Auto-dismiss the fallback notice after a few seconds so it doesn't
  // linger over the gameplay screen.
  useEffect(() => {
    if (!aiFallbackNotice) return;
    const t = setTimeout(() => setAiFallbackNotice(null), 6000);
    return () => clearTimeout(t);
  }, [aiFallbackNotice]);

  const currentQuestion = questions?.[currentQuestionIndex];
  const currentLevel = currentQuestionIndex + 1;
  const currentPrize = MONEY_LADDER[currentQuestionIndex]?.amount ?? 0;

  // Start thinking music each time a new question loads
  useEffect(() => {
    if (loadStatus !== 'ready') return;
    startThinkingMusic();
    return () => stopThinkingMusic();
  }, [currentQuestionIndex, loadStatus]);

  const toggleMute = useCallback(() => {
    const next = !muted;
    setMuted(next);
    setMutedState(next);
    if (next) stopThinkingMusic();
    else startThinkingMusic();
  }, [muted]);

  const handleAnswerClick = useCallback(
    (letter: string) => {
      if (revealState !== 'idle' || !currentQuestion) return;

      stopThinkingMusic();
      playAnswerSelected();
      setSelectedAnswer(letter);
      setRevealState('selected');

      // Suspense pause → reveal
      setTimeout(() => {
        setRevealState('revealing');

        setTimeout(() => {
          const isCorrect = letter === currentQuestion.correctLetter;
          setRevealState(isCorrect ? 'correct' : 'wrong');

          if (isCorrect) {
            playCorrect();
            setTimeout(() => {
              if (currentQuestionIndex === 14) {
                playWin();
                setTimeout(() => setLocation('/result?outcome=win'), 1800);
              } else {
                const nextLevel = currentQuestionIndex + 1;
                const isSafeHaven = MONEY_LADDER[nextLevel]?.isSafeHaven;
                if (isSafeHaven) playSafeHaven();
                else playLevelUp();
                setCurrentQuestionIndex(nextLevel);
                setSelectedAnswer(null);
                setRevealState('idle');
                setEliminatedOptions([]);
              }
            }, 2000);
          } else {
            playWrong();
            setTimeout(() => {
              const guaranteed = getGuaranteedPrize(currentLevel);
              setLocation(
                `/result?outcome=loss&prize=${guaranteed}&correct=${currentQuestion.correctLetter}`
              );
            }, 2200);
          }
        }, 1500);
      }, 1500);
    },
    [revealState, currentQuestion, currentQuestionIndex, currentLevel, setLocation]
  );

  const handleFiftyFifty = useCallback(() => {
    if (usedLifelines.fiftyFifty || revealState !== 'idle' || !currentQuestion) return;
    setUsedLifelines(prev => ({ ...prev, fiftyFifty: true }));
    const wrong = currentQuestion.options
      .filter(o => o.letter !== currentQuestion.correctLetter)
      .map(o => o.letter);
    const keepIdx = Math.floor(Math.random() * wrong.length);
    setEliminatedOptions(wrong.filter((_, i) => i !== keepIdx));
  }, [usedLifelines.fiftyFifty, revealState, currentQuestion]);

  const handlePhoneAFriend = useCallback(() => {
    if (usedLifelines.phoneAFriend || revealState !== 'idle') return;
    setUsedLifelines(prev => ({ ...prev, phoneAFriend: true }));
    playPhoneRing();
    setShowPhoneModal(true);
  }, [usedLifelines.phoneAFriend, revealState]);

  const handleAskAudience = useCallback(() => {
    if (usedLifelines.askAudience || revealState !== 'idle') return;
    setUsedLifelines(prev => ({ ...prev, askAudience: true }));
    playAudienceReveal();
    setShowAudienceModal(true);
  }, [usedLifelines.askAudience, revealState]);

  const handleWalkAway = useCallback(() => {
    if (revealState !== 'idle') return;
    stopThinkingMusic();
    playWalkAway();
    const guaranteed = getGuaranteedPrize(currentLevel);
    setTimeout(() => setLocation(`/result?outcome=walkaway&prize=${guaranteed}`), 600);
  }, [revealState, currentLevel, setLocation]);

  // Loading screen while the question set is being generated/selected.
  if (loadStatus !== 'ready' || !questions || !currentQuestion) {
    return (
      <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center gap-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-background pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] bg-primary/12 rounded-full blur-[140px] spotlight-pulse" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-4 text-center px-4">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}>
            {getAiQuestionsEnabled() ? (
              <Sparkles className="w-10 h-10 text-primary" />
            ) : (
              <Loader2 className="w-10 h-10 text-primary" />
            )}
          </motion.div>
          <p className="text-sm font-mono tracking-widest text-muted-foreground uppercase">
            {getAiQuestionsEnabled() ? 'Generating your quiz with AI…' : 'Shuffling the question deck…'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] w-full overflow-x-hidden relative flex flex-col">
      {/* Spotlight background */}
      <div className="absolute inset-0 bg-background pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] bg-primary/12 rounded-full blur-[140px] spotlight-pulse" />
      </div>

      {/* ── TOP BAR ─────────────────────────────────────────────────────────── */}
      {/* Mobile: two compact groups, always one row (lifelines are icon-only below sm).
          sm+: original three-group layout with the counter centered absolutely. */}
      <div className="relative z-10 flex-shrink-0 flex items-center justify-between gap-x-3 gap-y-2 px-3 sm:px-4 py-1.5 sm:py-2 border-b border-border/40 bg-card/25 backdrop-blur-sm">
        {/* Lifelines */}
        <div className="flex items-center gap-1.5 sm:gap-3 order-1">
          <LifelineButton
            type="50-50"
            used={usedLifelines.fiftyFifty}
            onClick={handleFiftyFifty}
            disabled={revealState !== 'idle'}
          />
          <LifelineButton
            type="phone"
            used={usedLifelines.phoneAFriend}
            onClick={handlePhoneAFriend}
            disabled={revealState !== 'idle'}
          />
          <LifelineButton
            type="audience"
            used={usedLifelines.askAudience}
            onClick={handleAskAudience}
            disabled={revealState !== 'idle'}
          />
        </div>

        {/* Center: question counter — sm+ only in the top bar; on mobile it
            moves down next to "FOR ₦X" so the top bar never has to wrap. */}
        <div className="hidden sm:block sm:order-2 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
          <p className="text-xs text-muted-foreground font-mono tracking-widest inline-flex items-center gap-1.5">
            QUESTION {currentLevel} / 15
            {usedAiQuestions && (
              <span
                className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-primary/15 text-primary text-[10px] font-bold"
                title="This question set was generated by AI (Groq)"
              >
                <Sparkles className="w-2.5 h-2.5" /> AI
              </span>
            )}
          </p>
        </div>

        {/* Right: walk away + mute */}
        <div className="flex items-center gap-1.5 sm:gap-2 order-2 sm:order-3">
          <button
            onClick={handleWalkAway}
            disabled={revealState !== 'idle'}
            className="px-2.5 sm:px-4 py-1.5 border border-accent/60 text-accent text-[11px] sm:text-xs font-bold rounded hover:bg-accent/10 transition-all disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
          >
            WALK AWAY
          </button>
          <button
            onClick={toggleMute}
            className="p-1.5 rounded border border-border/40 text-muted-foreground hover:text-foreground hover:border-border transition-all flex-shrink-0"
            title={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Notice when AI generation failed and we fell back to the built-in bank */}
      <AnimatePresence>
        {aiFallbackNotice && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="relative z-20 mx-3 mt-2 px-3 py-2 rounded border border-accent/40 bg-accent/10 text-accent text-xs font-mono"
          >
            {aiFallbackNotice}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MAIN AREA ────────────────────────────────────────────────────────── */}
      {/* Mobile/tablet: single column, ladder below answers. Desktop (lg+): two columns side by side. */}
      <div className="relative z-10 flex-1 flex flex-col lg:grid lg:grid-cols-[1fr_240px] gap-2 sm:gap-3 p-2.5 sm:p-3 lg:overflow-hidden">

        {/* LEFT: Question + Answers */}
        <div className="flex flex-col justify-center gap-2 sm:gap-3 lg:overflow-hidden min-w-0 order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-3"
            >
              {/* Question counter — mobile only (sm+ shows it in the top bar instead) */}
              <p className="sm:hidden text-center text-[11px] text-muted-foreground font-mono tracking-widest inline-flex items-center justify-center gap-1.5">
                QUESTION {currentLevel} / 15
                {usedAiQuestions && (
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-primary/15 text-primary text-[9px] font-bold">
                    <Sparkles className="w-2.5 h-2.5" /> AI
                  </span>
                )}
              </p>

              {/* Playing for */}
              <div className="text-center">
                <motion.p
                  key={currentPrize}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-lg sm:text-xl font-extrabold text-accent font-mono tracking-wide"
                >
                  FOR {formatCurrency(currentPrize)}
                </motion.p>
              </div>

              {/* Question box */}
              <div className="bg-card/60 backdrop-blur-sm border-2 border-primary/40 rounded-lg px-4 sm:px-6 py-3 sm:py-4 shadow-lg shadow-primary/10">
                <h2 className="text-base sm:text-xl font-bold text-foreground leading-snug text-center">
                  {currentQuestion.question}
                </h2>
              </div>

              {/* Answer grid: 1 column on small phones, 2 columns from sm breakpoint up */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {currentQuestion.options.map(option => (
                  <AnswerButton
                    key={option.letter}
                    letter={option.letter}
                    text={option.text}
                    selected={selectedAnswer === option.letter}
                    isCorrect={
                      (revealState === 'correct' || revealState === 'revealing') &&
                      option.letter === currentQuestion.correctLetter
                        ? true
                        : null
                    }
                    isWrong={revealState === 'wrong' && selectedAnswer === option.letter}
                    isEliminated={eliminatedOptions.includes(option.letter)}
                    disabled={
                      revealState !== 'idle' || eliminatedOptions.includes(option.letter)
                    }
                    onClick={() => handleAnswerClick(option.letter)}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Money Ladder — compact scrollable strip on mobile, sidebar on desktop */}
        <div className="order-2 lg:order-2 h-28 sm:h-48 lg:h-auto lg:overflow-hidden flex-shrink-0">
          <MoneyLadder currentLevel={currentLevel} />
        </div>
      </div>

      {/* Modals */}
      <PhoneFriendModal
        isOpen={showPhoneModal}
        onClose={() => setShowPhoneModal(false)}
        correctAnswer={currentQuestion.correctLetter}
        allAnswers={currentQuestion.options}
      />
      <AudienceModal
        isOpen={showAudienceModal}
        onClose={() => setShowAudienceModal(false)}
        correctAnswer={currentQuestion.correctLetter}
        allAnswers={currentQuestion.options}
      />
    </div>
  );
}
