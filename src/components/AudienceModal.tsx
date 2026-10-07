import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import { X, Users } from 'lucide-react';

interface AudienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  correctAnswer: string;
  allAnswers: { letter: string; text: string }[];
}

export function AudienceModal({ isOpen, onClose, correctAnswer, allAnswers }: AudienceModalProps) {
  const audienceVotes = useMemo(() => {
    if (!isOpen) return [];

    // Correct answer gets 60-80% of votes
    const correctPercentage = 60 + Math.random() * 20;
    const remaining = 100 - correctPercentage;

    const votes = allAnswers.map(answer => {
      if (answer.letter === correctAnswer) {
        return { letter: answer.letter, percentage: correctPercentage };
      }
      return { letter: answer.letter, percentage: 0 };
    });

    // Distribute remaining percentage among wrong answers
    const wrongAnswers = votes.filter(v => v.letter !== correctAnswer);
    let remainingToDistribute = remaining;

    wrongAnswers.forEach((vote, index) => {
      if (index === wrongAnswers.length - 1) {
        vote.percentage = remainingToDistribute;
      } else {
        const share = Math.random() * remainingToDistribute;
        vote.percentage = share;
        remainingToDistribute -= share;
      }
    });

    return votes.sort((a, b) => 
      allAnswers.findIndex(x => x.letter === a.letter) - 
      allAnswers.findIndex(x => x.letter === b.letter)
    );
  }, [isOpen, correctAnswer, allAnswers]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const topLetter = useMemo(
    () => audienceVotes.reduce((a, b) => (b.percentage > a.percentage ? b : a), audienceVotes[0]),
    [audienceVotes]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-lg z-50"
          >
            <div role="dialog" aria-modal="true" aria-label="Ask the Audience" className="glass-panel gold-ring grain-overlay rounded-2xl p-6 sm:p-8 shadow-2xl shadow-primary/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  Ask the Audience
                </h2>
                <button
                  onClick={onClose}
                  aria-label="Close" className="p-2 -m-2 text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="close-audience-modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {audienceVotes.map((vote, index) => {
                  const isTop = vote.letter === topLetter?.letter;
                  return (
                    <div key={vote.letter} className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className={`text-base font-bold font-mono ${isTop ? 'text-accent' : 'text-foreground'}`}>
                          {vote.letter}
                        </span>
                        <span className={`text-base font-bold font-mono ${isTop ? 'text-accent' : 'text-primary'}`}>
                          {vote.percentage.toFixed(0)}%
                        </span>
                      </div>
                      <div className="h-7 bg-muted/40 rounded-lg overflow-hidden border border-border/30">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${vote.percentage}%` }}
                          transition={{ delay: 0.15 + index * 0.1, duration: 0.9, ease: 'easeOut' }}
                          className={`h-full rounded-lg ${
                            isTop
                              ? 'bg-gradient-to-r from-accent/70 to-accent'
                              : 'bg-gradient-to-r from-primary/50 to-primary/70'
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={onClose}
                className="group relative w-full overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-b from-primary to-primary/85 text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/30 transition-all"
                data-testid="close-audience-button"
                  autoFocus
              >
                <span className="shine-sweep opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Continue</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
