import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, Phone } from 'lucide-react';

interface PhoneFriendModalProps {
  isOpen: boolean;
  onClose: () => void;
  correctAnswer: string;
  allAnswers: { letter: string; text: string }[];
}

export function PhoneFriendModal({ isOpen, onClose, correctAnswer, allAnswers }: PhoneFriendModalProps) {
  const [timer, setTimer] = useState(30);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      setTimer(30);
      
      // 90% chance friend gives correct answer
      const givesCorrect = Math.random() < 0.9;
      const answer = givesCorrect 
        ? allAnswers.find(a => a.letter === correctAnswer)
        : allAnswers[Math.floor(Math.random() * allAnswers.length)];

      const confidence = givesCorrect 
        ? "I'm pretty sure it's"
        : "I'm not entirely sure, but maybe";

      setMessage(`${confidence} ${answer?.letter}: ${answer?.text}`);

      const interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }

    return undefined;
  }, [isOpen, correctAnswer, allAnswers]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const urgent = timer <= 10;

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
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-md z-50"
          >
            <div role="dialog" aria-modal="true" aria-label="Phone a Friend" className="glass-panel gold-ring grain-overlay rounded-2xl p-6 sm:p-8 shadow-2xl shadow-primary/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  Phone a Friend
                </h2>
                <button
                  onClick={onClose}
                  aria-label="Close" className="p-2 -m-2 text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="close-phone-modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div
                      className={`w-24 h-24 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                        urgent ? 'bg-destructive/15 border-destructive' : 'bg-primary/15 border-primary'
                      }`}
                    >
                      <span className={`text-4xl font-bold font-mono ${urgent ? 'text-destructive' : 'text-primary'}`}>
                        {timer}
                      </span>
                    </div>
                    <motion.div
                      className={`absolute inset-0 rounded-full border-2 ${urgent ? 'border-destructive' : 'border-primary'}`}
                      initial={{ scale: 1, opacity: 0.6 }}
                      animate={{ scale: 1.35, opacity: 0 }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                <div className="bg-background/40 rounded-xl p-5 sm:p-6 border border-border/40">
                  <p className="text-base sm:text-lg text-foreground leading-relaxed italic">
                    "{message}"
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="group relative w-full overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-b from-primary to-primary/85 text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/30 transition-all"
                  data-testid="close-phone-button"
                  autoFocus
                >
                  <span className="shine-sweep opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">Thank You</span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
