import { motion } from 'framer-motion';
import { Link, useSearch } from 'wouter';
import { Trophy, TrendingUp, DollarSign } from 'lucide-react';
import { useEffect, useState } from 'react';
import { formatCurrency } from '@/data/questions';

export default function Result() {
  const searchParams = useSearch();
  const params = new URLSearchParams(searchParams);
  
  const outcome = params.get('outcome') || 'loss';
  const prize = parseInt(params.get('prize') || '0');
  const correctAnswer = params.get('correct') || '';

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (outcome === 'win') {
      setShowConfetti(true);
    }
  }, [outcome]);

  const isWin = outcome === 'win';
  const isWalkaway = outcome === 'walkaway';

  return (
    <div className="min-h-[100dvh] w-full relative overflow-hidden">
      {/* Radial spotlight background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[120px] spotlight-pulse" />
      </div>

      {/* Confetti for win */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: -20,
                rotate: 0
              }}
              animate={{
                y: window.innerHeight + 20,
                rotate: 360 * (Math.random() > 0.5 ? 1 : -1)
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 0.5,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="absolute w-3 h-3 rounded-full"
              style={{
                backgroundColor: ['#f59e0b', '#10b981', '#3b82f6', '#ef4444'][Math.floor(Math.random() * 4)]
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] px-4">
        {isWin ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            >
              <Trophy className="w-32 h-32 mx-auto text-accent mb-6" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-5xl md:text-7xl font-extrabold text-foreground mb-4"
            >
              CONGRATULATIONS!
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-6xl md:text-8xl font-extrabold text-accent mb-6"
            >
              YOU ARE A MILLIONAIRE!
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-4xl font-bold text-primary font-mono"
            >
              {formatCurrency(1000000)}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <Link
                href="/"
                className="inline-block px-12 py-5 bg-primary text-primary-foreground text-xl font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105"
                data-testid="play-again-button"
              >
                PLAY AGAIN
              </Link>
            </motion.div>
          </motion.div>
        ) : isWalkaway ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            >
              <DollarSign className="w-32 h-32 mx-auto text-accent mb-6" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold text-foreground mb-4"
            >
              WELL PLAYED!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-2xl text-muted-foreground mb-6"
            >
              You walked away with
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-6xl md:text-7xl font-extrabold text-accent mb-8"
            >
              {formatCurrency(prize)}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <Link
                href="/"
                className="inline-block px-12 py-5 bg-primary text-primary-foreground text-xl font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105"
                data-testid="play-again-button"
              >
                PLAY AGAIN
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            >
              <TrendingUp className="w-32 h-32 mx-auto text-destructive mb-6" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold text-destructive mb-4"
            >
              INCORRECT!
            </motion.h1>

            {correctAnswer && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-2xl text-muted-foreground mb-6"
              >
                The correct answer was <span className="text-chart-1 font-bold">{correctAnswer}</span>
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-xl text-foreground mb-2"
            >
              You take home
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold text-accent mb-8"
            >
              {formatCurrency(prize)}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <Link
                href="/"
                className="inline-block px-12 py-5 bg-primary text-primary-foreground text-xl font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105"
                data-testid="play-again-button"
              >
                PLAY AGAIN
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
