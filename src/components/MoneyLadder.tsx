import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Gem } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MONEY_LADDER, formatCurrency } from '@/data/questions';

interface MoneyLadderProps {
  currentLevel: number;
}

export function MoneyLadder({ currentLevel }: MoneyLadderProps) {
  // Always-attached ref per rung, keyed by level. We tried conditionally
  // handing a single ref to "whichever item is current" (ref={isCurrent ?
  // currentRef : undefined}), but framer-motion's motion.div does not
  // reliably reattach a ref that toggles between undefined and an object
  // across renders — it stayed pointed at level 1 forever, which is why
  // the ladder never scrolled past the first two rungs on mobile. An
  // unconditional ref on every item avoids that entirely.
  const itemRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const setItemRef = (level: number) => (el: HTMLDivElement | null) => {
    if (el) itemRefs.current.set(level, el);
    else itemRefs.current.delete(level);
  };

  // Render highest level first so it's visually on top — using normal
  // (non-reversed) flex-column order. `flex-col-reverse` looks identical
  // but makes scrollIntoView() unreliable across browsers, so we avoid it.
  const rungsHighToLow = [...MONEY_LADDER].reverse();

  // Keep the active rung in view, especially important on short mobile
  // viewports where the ladder scrolls instead of showing all 15 rows.
  useEffect(() => {
    itemRefs.current.get(currentLevel)?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, [currentLevel]);

  return (
    <div className="glass-panel h-full flex flex-col rounded-xl overflow-hidden">
      <div className="flex-shrink-0 px-3 pt-3 pb-2 border-b border-border/40 flex items-center justify-between">
        <h2 className="text-xs font-bold text-primary font-mono tracking-widest uppercase">
          Prize Ladder
        </h2>
        <Gem className="w-3.5 h-3.5 text-accent/70" />
      </div>
      <div className="flex-1 overflow-y-auto premium-scrollbar flex flex-col justify-start p-2 gap-1">
        {rungsHighToLow.map((item) => {
          const isCurrent = item.level === currentLevel;
          const isPassed = item.level < currentLevel;

          return (
            <motion.div
              key={item.level}
              ref={setItemRef(item.level)}
              animate={isCurrent ? { scale: [1, 1.02, 1] } : { scale: 1 }}
              transition={{ duration: 1.6, repeat: isCurrent ? Infinity : 0, repeatDelay: 1.4, ease: 'easeInOut' }}
              className={cn(
                'relative flex items-center justify-between px-3 rounded-lg border transition-all duration-300',
                'min-h-[28px]',
                isCurrent &&
                  'border-accent bg-gradient-to-r from-accent/25 via-accent/10 to-transparent shadow-[0_0_16px_-2px_hsl(var(--accent)/0.5)]',
                isPassed && 'border-primary/20 bg-primary/5',
                !isCurrent && !isPassed && 'border-border/20 bg-transparent',
                item.isSafeHaven && !isCurrent && 'border-l-2 border-l-accent/50'
              )}
              data-testid={`money-level-${item.level}`}
            >
              <span
                className={cn(
                  'text-[10px] font-bold font-mono w-5 text-center flex-shrink-0',
                  isCurrent && 'text-accent',
                  isPassed && 'text-primary/70',
                  !isCurrent && !isPassed && 'text-muted-foreground/40'
                )}
              >
                {item.level}
              </span>

              <span
                className={cn(
                  'text-xs font-bold font-mono tracking-wide ml-1',
                  isCurrent && 'text-gold-gradient text-sm',
                  isPassed && 'text-primary/75',
                  !isCurrent && !isPassed && 'text-foreground/50',
                  item.amount === 1000000 && 'text-sm font-extrabold'
                )}
              >
                {formatCurrency(item.amount)}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
