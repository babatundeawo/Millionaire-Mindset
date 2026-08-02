import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { AnswerButton } from '@/components/AnswerButton';
import { MoneyLadder } from '@/components/MoneyLadder';
import { LifelineButton } from '@/components/LifelineButton';
import { PhoneFriendModal } from '@/components/PhoneFriendModal';
import { AudienceModal } from '@/components/AudienceModal';
import { selectRandomQuestions, getGuaranteedPrize, MONEY_LADDER } from '@/data/questions';
import type { Question } from '@/data/questions';
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

export default function Game() {
  const [, setLocation] = useLocation();
  const [questions] = useState<Question[]>(() => selectRandomQuestions());
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

  const currentQuestion = questions[currentQuestionIndex];
  const currentLevel = currentQuestionIndex + 1;
  const currentPrize = MONEY_LADDER[currentQuestionIndex]?.amount ?? 0;

  // Start thinking music each time a new question loads
  useEffect(() => {
    startThinkingMusic();
    return () => stopThinkingMusic();
  }, [currentQuestionIndex]);

  const toggleMute = useCallback(() => {
    const next = !muted;
    setMuted(next);
    setMutedState(next);
    if (next) stopThinkingMusic();
    else startThinkingMusic();
  }, [muted]);

  const handleAnswerClick = useCallback(
    (letter: string) => {
      if (revealState !== 'idle') return;

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
    if (usedLifelines.fiftyFifty || revealState !== 'idle') return;
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

  return (
    <div className="h-[100dvh] w-full overflow-hidden relative flex flex-col">
      {/* Spotlight background */}
      <div className="absolute inset-0 bg-background pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] bg-primary/12 rounded-full blur-[140px] spotlight-pulse" />
      </div>

      {/* ── TOP BAR ─────────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex-shrink-0 flex items-center justify-between px-4 py-2 border-b border-border/40 bg-card/25 backdrop-blur-sm">
        {/* Lifelines */}
        <div className="flex items-center gap-3">
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

        {/* Center: question counter */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <p className="text-xs text-muted-foreground font-mono tracking-widest">
            QUESTION {currentLevel} / 15
          </p>
        </div>

        {/* Right: walk away + mute */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleWalkAway}
            disabled={revealState !== 'idle'}
            className="px-4 py-1.5 border border-accent/60 text-accent text-xs font-bold rounded hover:bg-accent/10 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            WALK AWAY
          </button>
          <button
            onClick={toggleMute}
            className="p-1.5 rounded border border-border/40 text-muted-foreground hover:text-foreground hover:border-border transition-all"
            title={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ── MAIN AREA ────────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 overflow-hidden grid grid-cols-[1fr_240px] gap-3 p-3">

        {/* LEFT: Question + Answers */}
        <div className="flex flex-col justify-center gap-3 overflow-hidden min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-3"
            >
              {/* Playing for */}
              <div className="text-center">
                <motion.p
                  key={currentPrize}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-xl font-extrabold text-accent font-mono tracking-wide"
                >
                  FOR ${currentPrize.toLocaleString()}
                </motion.p>
              </div>

              {/* Question box */}
              <div className="bg-card/60 backdrop-blur-sm border-2 border-primary/40 rounded-lg px-6 py-4 shadow-lg shadow-primary/10">
                <h2 className="text-xl font-bold text-foreground leading-snug text-center">
                  {currentQuestion.question}
                </h2>
              </div>

              {/* Answer grid */}
              <div className="grid grid-cols-2 gap-2.5">
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

        {/* RIGHT: Money Ladder — always visible */}
        <div className="overflow-hidden">
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
