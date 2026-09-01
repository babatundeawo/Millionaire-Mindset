import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
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
    <div className="h-full flex flex-col bg-card/60 backdrop-blur-sm border border-border rounded-lg overflow-hidden">
      <div className="flex-shrink-0 px-3 pt-3 pb-2 border-b border-border/50">
        <h2 className="text-xs font-bold text-primary font-mono tracking-widest uppercase">
          Prize Ladder
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col justify-start p-2 gap-1">
        {rungsHighToLow.map((item) => {
          const isCurrent = item.level === currentLevel;
          const isPassed = item.level < currentLevel;

          return (
            <motion.div
              key={item.level}
              ref={setItemRef(item.level)}
              animate={isCurrent ? { scale: [1, 1.03, 1] } : {}}
              transition={{ duration: 0.6, repeat: isCurrent ? Infinity : 0, repeatDelay: 2 }}
              className={cn(
                'relative flex items-center justify-between px-3 rounded border transition-all duration-300',
                'min-h-[28px]',
                isCurrent && 'border-accent bg-accent/20 shadow-sm shadow-accent/40',
                isPassed && 'border-primary/25 bg-primary/8',
                !isCurrent && !isPassed && 'border-border/30 bg-transparent',
                item.isSafeHaven && 'ring-1 ring-primary/50 ring-offset-1 ring-offset-background'
              )}
              data-testid={`money-level-${item.level}`}
            >
              {/* Safe-haven dot */}
              {item.isSafeHaven && (
                <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow shadow-primary/60" />
              )}

              <span
                className={cn(
                  'text-[10px] font-bold font-mono w-5 text-center flex-shrink-0',
                  isCurrent && 'text-accent',
                  isPassed && 'text-primary/70',
                  !isCurrent && !isPassed && 'text-muted-foreground/50'
                )}
              >
                {item.level}
              </span>

              <span
                className={cn(
                  'text-xs font-bold font-mono tracking-wide ml-1',
                  isCurrent && 'text-accent text-sm',
                  isPassed && 'text-primary/80',
                  !isCurrent && !isPassed && 'text-foreground/60',
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
