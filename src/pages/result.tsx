import { motion } from 'framer-motion';
import { Link, useSearch } from 'wouter';
import { Trophy, TrendingDown, Banknote } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { formatCurrency, MONEY_LADDER } from '@/data/questions';

const CONFETTI_COLORS = ['#f5c542', '#eab308', '#10b981', '#3b82f6', '#f59e0b'];

function PlayAgainButton() {
  return (
    <Link
      href="/"
      className="group relative inline-flex items-center justify-center overflow-hidden px-8 sm:px-12 py-4 sm:py-5 rounded-xl bg-gradient-to-b from-primary to-primary/80 text-primary-foreground text-lg sm:text-xl font-bold tracking-wide transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-0.5"
      data-testid="play-again-button"
    >
      <span className="shine-sweep opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative">PLAY AGAIN</span>
    </Link>
  );
}

export default function Result() {
  const searchParams = useSearch();
  const params = new URLSearchParams(searchParams);

  // Query params are untrusted: accept only known outcomes, real ladder
  // amounts and A-D letters, so a hand-edited link can't show a fake result.
  const rawOutcome = params.get('outcome');
  const outcome = rawOutcome === 'win' || rawOutcome === 'walkaway' ? rawOutcome : 'loss';
  const rawPrize = parseInt(params.get('prize') || '0', 10);
  const prize = MONEY_LADDER.some(r => r.amount === rawPrize) ? rawPrize : 0;
  const rawCorrect = params.get('correct') || '';
  const correctAnswer = /^[A-D]$/.test(rawCorrect) ? rawCorrect : '';

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (outcome === 'win') {
      setShowConfetti(true);
    }
  }, [outcome]);

  const isWin = outcome === 'win';
  const isWalkaway = outcome === 'walkaway';

  // Pre-compute confetti geometry once so pieces don't jump around on
  // re-render, and vary size/shape a little for a fuller, less uniform fall.
  const confettiPieces = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 6 + Math.random() * 8,
        rounded: Math.random() > 0.5,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        duration: 3.5 + Math.random() * 2.5,
        delay: Math.random() * 1.2,
        drift: (Math.random() - 0.5) * 200,
        spin: 360 * (Math.random() > 0.5 ? 1 : -1),
      })),
    []
  );

  return (
    <div className="min-h-[100dvh] w-full relative overflow-hidden grain-overlay">
      {/* Radial spotlight background */}
      <div className="absolute inset-0 bg-background">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[120px] spotlight-pulse ${
            isWin ? 'bg-accent/20' : 'bg-primary/20'
          }`}
        />
      </div>

      {/* Confetti for win */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {confettiPieces.map(p => (
            <motion.div
              key={p.id}
              initial={{ x: `${p.left}vw`, y: '-5vh', rotate: 0, opacity: 1 }}
              animate={{ x: `calc(${p.left}vw + ${p.drift}px)`, y: '105vh', rotate: p.spin }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute"
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                borderRadius: p.rounded ? '999px' : '2px',
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
            className="text-center space-y-6"
          >
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
              className="relative inline-block"
            >
              <div className="absolute inset-0 rounded-full bg-accent/30 blur-2xl scale-110" />
              <Trophy className="relative w-20 h-20 sm:w-32 sm:h-32 mx-auto text-gold-gradient mb-2" style={{ filter: 'drop-shadow(0 4px 16px hsl(var(--gold-2)/0.5))' }} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-foreground mb-2 px-2 tracking-tight"
            >
              CONGRATULATIONS!
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl md:text-8xl font-black text-gold-gradient mb-4 px-2"
            >
              You Are a Millionaire!
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
              className="pt-2"
            >
              <PlayAgainButton />
            </motion.div>
          </motion.div>
        ) : isWalkaway ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            >
              <Banknote className="w-20 h-20 sm:w-32 sm:h-32 mx-auto text-accent mb-4" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-2 px-2"
            >
              WELL PLAYED!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-2"
            >
              You walked away with
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl md:text-7xl font-black text-gold-gradient mb-6 px-2"
            >
              {formatCurrency(prize)}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <PlayAgainButton />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center space-y-5"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            >
              <TrendingDown className="w-20 h-20 sm:w-32 sm:h-32 mx-auto text-destructive mb-4" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-destructive mb-2 px-2"
            >
              INCORRECT!
            </motion.h1>

            {correctAnswer && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-xl sm:text-2xl text-muted-foreground mb-2"
              >
                The correct answer was <span className="text-chart-1 font-bold">{correctAnswer}</span>
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-lg sm:text-xl text-foreground/80 mb-1"
            >
              You take home
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl md:text-6xl font-black text-gold-gradient mb-6 px-2"
            >
              {formatCurrency(prize)}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <PlayAgainButton />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
