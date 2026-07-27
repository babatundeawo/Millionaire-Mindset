import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full relative overflow-hidden">
      {/* Radial spotlight background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] spotlight-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          {/* Circular logo arrangement */}
          <div className="relative w-64 h-64 mx-auto mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="absolute inset-0 rounded-full border-4 border-primary bg-primary/10 shadow-2xl shadow-primary/30"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
              className="absolute inset-8 rounded-full border-2 border-primary/60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-20 h-20 text-primary" />
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold text-foreground mb-4 tracking-tight leading-tight"
          >
            WHO WANTS TO BE A
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent mb-8"
          >
            MILLIONAIRE?
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-center space-y-6"
        >
          <p className="text-3xl font-bold text-accent font-mono">
            WIN UP TO $1,000,000
          </p>

          <Link
            href="/game"
            className="inline-block px-12 py-5 bg-primary text-primary-foreground text-2xl font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105"
            data-testid="play-button"
          >
            PLAY NOW
          </Link>

          <div className="mt-8 text-muted-foreground text-sm font-mono">
            <p>15 QUESTIONS</p>
            <p>3 LIFELINES</p>
            <p>ONE MILLION DOLLARS</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
