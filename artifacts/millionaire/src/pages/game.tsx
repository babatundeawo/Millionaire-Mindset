import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { AnswerButton } from '@/components/AnswerButton';
import { MoneyLadder } from '@/components/MoneyLadder';
import { LifelineButton } from '@/components/LifelineButton';
import { PhoneFriendModal } from '@/components/PhoneFriendModal';
import { AudienceModal } from '@/components/AudienceModal';
import { selectRandomQuestions, getGuaranteedPrize, formatCurrency } from '@/data/questions';
import type { Question } from '@/data/questions';

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
    askAudience: false
  });
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showAudienceModal, setShowAudienceModal] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const currentLevel = currentQuestionIndex + 1;

  const handleAnswerClick = useCallback((letter: string) => {
    if (revealState !== 'idle') return;

    setSelectedAnswer(letter);
    setRevealState('selected');

    // Dramatic pause before reveal
    setTimeout(() => {
      setRevealState('revealing');
      
      setTimeout(() => {
        const isCorrect = letter === currentQuestion.correctLetter;
        setRevealState(isCorrect ? 'correct' : 'wrong');

        if (isCorrect) {
          // Correct answer - move to next question or win
          setTimeout(() => {
            if (currentQuestionIndex === 14) {
              // Won the game!
              setLocation('/result?outcome=win');
            } else {
              // Next question
              setCurrentQuestionIndex(prev => prev + 1);
              setSelectedAnswer(null);
              setRevealState('idle');
              setEliminatedOptions([]);
            }
          }, 2000);
        } else {
          // Wrong answer - game over
          setTimeout(() => {
            const guaranteed = getGuaranteedPrize(currentLevel);
            setLocation(`/result?outcome=loss&prize=${guaranteed}&correct=${currentQuestion.correctLetter}`);
          }, 2000);
        }
      }, 1500);
    }, 1500);
  }, [revealState, currentQuestion, currentQuestionIndex, currentLevel, setLocation]);

  const handleFiftyFifty = useCallback(() => {
    if (usedLifelines.fiftyFifty || revealState !== 'idle') return;

    setUsedLifelines(prev => ({ ...prev, fiftyFifty: true }));

    // Keep correct answer and one random wrong answer
    const wrongAnswers = currentQuestion.options
      .filter(opt => opt.letter !== currentQuestion.correctLetter)
      .map(opt => opt.letter);

    // Randomly select one wrong answer to keep
    const keepIndex = Math.floor(Math.random() * wrongAnswers.length);
    const eliminate = wrongAnswers.filter((_, index) => index !== keepIndex);

    setEliminatedOptions(eliminate);
  }, [usedLifelines.fiftyFifty, revealState, currentQuestion]);

  const handlePhoneAFriend = useCallback(() => {
    if (usedLifelines.phoneAFriend || revealState !== 'idle') return;

    setUsedLifelines(prev => ({ ...prev, phoneAFriend: true }));
    setShowPhoneModal(true);
  }, [usedLifelines.phoneAFriend, revealState]);

  const handleAskAudience = useCallback(() => {
    if (usedLifelines.askAudience || revealState !== 'idle') return;

    setUsedLifelines(prev => ({ ...prev, askAudience: true }));
    setShowAudienceModal(true);
  }, [usedLifelines.askAudience, revealState]);

  const handleWalkAway = useCallback(() => {
    if (revealState !== 'idle') return;

    const guaranteed = getGuaranteedPrize(currentLevel);
    setLocation(`/result?outcome=walkaway&prize=${guaranteed}`);
  }, [revealState, currentLevel, setLocation]);

  return (
    <div className="min-h-[100dvh] w-full relative overflow-hidden">
      {/* Radial spotlight background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/15 rounded-full blur-[150px] spotlight-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[100dvh] flex flex-col">
        {/* Top bar - Lifelines */}
        <div className="p-6 border-b border-border/50 bg-card/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
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

            <button
              onClick={handleWalkAway}
              disabled={revealState !== 'idle'}
              className="px-6 py-3 border-2 border-accent text-accent rounded-lg font-bold hover:bg-accent/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="walk-away-button"
            >
              WALK AWAY
            </button>
          </div>
        </div>

        {/* Main game area */}
        <div className="flex-1 grid lg:grid-cols-[1fr,320px] gap-8 p-6 max-w-7xl mx-auto w-full">
          {/* Question area */}
          <div className="flex flex-col justify-center space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Current prize */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground font-mono mb-2">
                    QUESTION {currentLevel} OF 15
                  </p>
                  <p className="text-2xl font-bold text-accent font-mono">
                    FOR {formatCurrency(currentLevel === 1 ? 100 : currentLevel === 2 ? 200 : currentLevel === 3 ? 300 : currentLevel === 4 ? 500 : currentLevel === 5 ? 1000 : currentLevel === 6 ? 2000 : currentLevel === 7 ? 4000 : currentLevel === 8 ? 8000 : currentLevel === 9 ? 16000 : currentLevel === 10 ? 32000 : currentLevel === 11 ? 64000 : currentLevel === 12 ? 125000 : currentLevel === 13 ? 250000 : currentLevel === 14 ? 500000 : 1000000)}
                  </p>
                </div>

                {/* Question */}
                <div className="bg-card/60 backdrop-blur-sm border-2 border-primary/40 rounded-lg p-8 shadow-xl shadow-primary/10">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed text-center">
                    {currentQuestion.question}
                  </h2>
                </div>

                {/* Answers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentQuestion.options.map(option => (
                    <AnswerButton
                      key={option.letter}
                      letter={option.letter}
                      text={option.text}
                      selected={selectedAnswer === option.letter}
                      isCorrect={
                        revealState === 'correct' && option.letter === currentQuestion.correctLetter
                          ? true
                          : revealState === 'revealing' && option.letter === currentQuestion.correctLetter
                          ? true
                          : null
                      }
                      isWrong={
                        revealState === 'wrong' && selectedAnswer === option.letter
                      }
                      isEliminated={eliminatedOptions.includes(option.letter)}
                      disabled={revealState !== 'idle' || eliminatedOptions.includes(option.letter)}
                      onClick={() => handleAnswerClick(option.letter)}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Money ladder - hidden on mobile, visible on desktop */}
          <div className="hidden lg:block">
            <MoneyLadder currentLevel={currentLevel} />
          </div>
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
