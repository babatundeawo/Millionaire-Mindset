import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnswerButtonProps {
  letter: string;
  text: string;
  selected: boolean;
  isCorrect: boolean | null;
  isWrong: boolean;
  isEliminated: boolean;
  disabled: boolean;
  onClick: () => void;
}

const springTap = { type: 'spring', stiffness: 500, damping: 30 } as const;

export function AnswerButton({
  letter,
  text,
  selected,
  isCorrect,
  isWrong,
  isEliminated,
  disabled,
  onClick
}: AnswerButtonProps) {
  if (isEliminated) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative"
      >
        <div className="relative px-4 py-3 sm:px-6 sm:py-5 rounded-xl border border-border/40 bg-muted/10">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-muted/40 flex items-center justify-center">
              <span className="text-base sm:text-lg font-bold text-muted-foreground/50">{letter}</span>
            </div>
            <span className="text-sm sm:text-lg font-semibold text-muted-foreground/40 line-through">{text}</span>
          </div>
        </div>
      </motion.div>
    );
  }

  const isNeutral = !selected && !isCorrect && !isWrong;

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      layout
      whileHover={!disabled ? { scale: 1.015, y: -1 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={springTap}
      className={cn(
        'group relative px-4 py-3 sm:px-6 sm:py-5 rounded-xl border transition-colors duration-300 overflow-hidden text-left',
        'disabled:cursor-not-allowed',
        selected && !isCorrect && !isWrong &&
          'border-accent bg-gradient-to-r from-accent/25 via-accent/10 to-transparent shadow-[0_0_0_1px_hsl(var(--accent)/0.4),0_8px_24px_-8px_hsl(var(--accent)/0.5)]',
        isCorrect &&
          'border-chart-1 bg-gradient-to-r from-chart-1/25 via-chart-1/10 to-transparent glow-sweep',
        isWrong &&
          'border-destructive bg-gradient-to-r from-destructive/25 via-destructive/10 to-transparent wrong-shake',
        isNeutral &&
          'border-border/60 bg-card/60 hover:border-primary/70 hover:bg-card shadow-sm hover:shadow-md hover:shadow-primary/5'
      )}
      data-testid={`answer-${letter}`}
    >
      {/* Hover shine sweep — neutral state only, signals interactivity */}
      {isNeutral && !disabled && (
        <span className="shine-sweep opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      <div className="relative flex items-center gap-3 sm:gap-4">
        <div
          className={cn(
            'flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300 border',
            selected && !isCorrect && !isWrong && 'bg-accent text-accent-foreground border-accent/60 shadow-md shadow-accent/40',
            isCorrect && 'bg-chart-1 text-background border-chart-1/60 shadow-md shadow-chart-1/40',
            isWrong && 'bg-destructive text-destructive-foreground border-destructive/60 shadow-md shadow-destructive/40',
            isNeutral && 'bg-primary/10 text-primary border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/40'
          )}
        >
          {isCorrect ? (
            <Check className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />
          ) : isWrong ? (
            <X className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />
          ) : (
            <span className="text-base sm:text-lg font-bold font-mono">{letter}</span>
          )}
        </div>
        <span
          className={cn(
            'text-sm sm:text-lg font-semibold transition-colors duration-300',
            selected && !isCorrect && !isWrong && 'text-accent',
            isCorrect && 'text-chart-1',
            isWrong && 'text-destructive',
            isNeutral && 'text-foreground/90 group-hover:text-foreground'
          )}
        >
          {text}
        </span>
      </div>
    </motion.button>
  );
}
