import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

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
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
          >
            <div className="bg-card border-2 border-primary rounded-lg p-8 shadow-2xl shadow-primary/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary">Phone a Friend</h2>
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="close-phone-modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary font-mono">{timer}</span>
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-primary"
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ scale: 1.2, opacity: 0 }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                  </div>
                </div>

                <div className="bg-background/50 rounded-lg p-6 border border-border">
                  <p className="text-lg text-foreground leading-relaxed">
                    "{message}"
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors"
                  data-testid="close-phone-button"
                >
                  Thank You
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
