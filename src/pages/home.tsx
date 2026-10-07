import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Gem, Zap, Phone, ShieldCheck } from 'lucide-react';
import { AiSettingsPanel } from '@/components/AiSettingsPanel';
import { MONEY_LADDER, formatCurrency } from '@/data/questions';

const [havenA, havenB] = MONEY_LADDER.filter(r => r.isSafeHaven);
const TOP = MONEY_LADDER[MONEY_LADDER.length - 1];

const STEPS = [
  { icon: Zap, title: '15 questions', text: 'Climb from easy to very hard. Every correct answer raises the stakes.' },
  { icon: Phone, title: '3 lifelines', text: '50:50, Phone a Friend and Ask the Audience. Each can be used once per game.' },
  {
    icon: ShieldCheck,
    title: '2 safe havens',
    text: `Answer question ${havenA.level} to lock in ${formatCurrency(havenA.amount)}, and question ${havenB.level} to lock in ${formatCurrency(havenB.amount)}.`,
  },
];

const rise = (delay: number) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } });

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full relative overflow-hidden grain-overlay">
      <div className="absolute inset-0 bg-background" aria-hidden="true">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] max-w-full bg-primary/15 rounded-full blur-[130px] spotlight-pulse" />
        <div className="absolute bottom-0 right-[10%] w-[360px] h-[360px] bg-accent/10 rounded-full blur-[110px] drift-slow" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-3xl flex-col items-center px-4 pt-16 pb-8 text-center">
        <motion.div {...rise(0)} className="mb-8 flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-xs tracking-[0.2em] text-primary">
          <Gem className="h-3.5 w-3.5" aria-hidden="true" /> MILLIONAIRE MINDSET
        </motion.div>

        <motion.h1 {...rise(0.1)} className="mb-6">
          <span className="block text-lg sm:text-2xl font-semibold uppercase tracking-[0.18em] text-foreground/80">Who wants to be a</span>
          <span className="block font-[family-name:var(--font-display)] text-6xl sm:text-8xl md:text-9xl font-black text-gold-gradient">Millionaire?</span>
        </motion.h1>

        <motion.p {...rise(0.2)} className="mb-8 font-mono text-base sm:text-xl tracking-widest text-muted-foreground">
          WIN UP TO <span className="text-gold-gradient font-bold">{formatCurrency(TOP.amount)}</span>
        </motion.p>

        <motion.div {...rise(0.3)}>
          <Link
            href="/game"
            data-testid="play-button"
            className="group relative inline-flex min-h-[56px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-primary to-primary/80 px-12 text-lg sm:text-xl font-bold tracking-wide text-primary-foreground shadow-xl shadow-primary/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/40 active:translate-y-0"
          >
            <span className="shine-sweep opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">PLAY NOW</span>
          </Link>
        </motion.div>

        <motion.ul {...rise(0.45)} className="mt-14 grid w-full gap-3 sm:grid-cols-3" aria-label="How to play">
          {STEPS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="glass-panel rounded-2xl p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-primary/40">
              <Icon className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
              <h2 className="mb-1 text-base font-bold tracking-normal">{title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </motion.ul>

        <motion.div {...rise(0.55)} className="w-full">
          <AiSettingsPanel />
        </motion.div>

        <footer className="mt-auto pt-12 text-xs text-muted-foreground">
          Play money only, no real prizes.{' '}
          <a href="https://github.com/babatundeawo/Millionaire-Mindset" target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">
            Source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
