import { motion, AnimatePresence } from 'framer-motion';
import { useMemo } from 'react';
import { X } from 'lucide-react';

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
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50"
          >
            <div className="bg-card border-2 border-primary rounded-lg p-8 shadow-2xl shadow-primary/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary">Ask the Audience</h2>
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="close-audience-modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {audienceVotes.map((vote, index) => (
                  <div key={vote.letter} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-foreground">{vote.letter}</span>
                      <span className="text-lg font-bold text-primary font-mono">
                        {vote.percentage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="h-8 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${vote.percentage}%` }}
                        transition={{ delay: index * 0.1, duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={onClose}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors"
                data-testid="close-audience-button"
              >
                Continue
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
