import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MONEY_LADDER, formatCurrency } from '@/data/questions';

interface MoneyLadderProps {
  currentLevel: number;
}

export function MoneyLadder({ currentLevel }: MoneyLadderProps) {
  return (
    <div className="bg-card/60 backdrop-blur-sm border border-border rounded-lg p-6">
      <h2 className="text-xl font-bold text-primary mb-6 font-mono tracking-wide">
        PRIZE LADDER
      </h2>
      <div className="space-y-2">
        {[...MONEY_LADDER].reverse().map((item, index) => {
          const isCurrent = item.level === currentLevel;
          const isPassed = item.level < currentLevel;
          
          return (
            <motion.div
              key={item.level}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "relative px-4 py-3 rounded-md border-2 transition-all duration-300",
                isCurrent && "border-accent bg-accent/20 shadow-lg shadow-accent/30",
                isPassed && "border-primary/30 bg-primary/10",
                !isCurrent && !isPassed && "border-border/50 bg-card/40",
                item.isSafeHaven && "ring-2 ring-primary/40 ring-offset-2 ring-offset-background"
              )}
              data-testid={`money-level-${item.level}`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "text-sm font-semibold font-mono",
                    isCurrent && "text-accent",
                    isPassed && "text-primary",
                    !isCurrent && !isPassed && "text-muted-foreground"
                  )}
                >
                  {item.level}
                </span>
                <span
                  className={cn(
                    "text-lg font-bold font-mono tracking-wide",
                    isCurrent && "text-accent",
                    isPassed && "text-primary",
                    !isCurrent && !isPassed && "text-foreground/70"
                  )}
                >
                  {formatCurrency(item.amount)}
                </span>
              </div>
              {item.isSafeHaven && (
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
