import { motion } from 'framer-motion';
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
        animate={{ opacity: 0.2 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="relative px-6 py-5 rounded-lg border-2 border-muted bg-muted/20 opacity-40">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <span className="text-lg font-bold text-muted-foreground">{letter}</span>
            </div>
            <span className="text-lg font-semibold text-muted-foreground line-through">{text}</span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={cn(
        "relative px-6 py-5 rounded-lg border-2 transition-all duration-300",
        "disabled:cursor-not-allowed",
        selected && !isCorrect && !isWrong && "border-accent bg-accent/20 shadow-lg shadow-accent/50",
        isCorrect && "border-chart-1 bg-chart-1/20 glow-sweep",
        isWrong && "border-destructive bg-destructive/20 wrong-shake",
        !selected && !isCorrect && !isWrong && "border-primary/40 bg-card hover:border-primary hover:bg-card/80"
      )}
      data-testid={`answer-${letter}`}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
            selected && !isCorrect && !isWrong && "bg-accent text-accent-foreground",
            isCorrect && "bg-chart-1 text-background",
            isWrong && "bg-destructive text-destructive-foreground",
            !selected && !isCorrect && !isWrong && "bg-primary/20 text-primary"
          )}
        >
          <span className="text-lg font-bold">{letter}</span>
        </div>
        <span
          className={cn(
            "text-lg font-semibold transition-colors duration-300",
            selected && !isCorrect && !isWrong && "text-accent",
            isCorrect && "text-chart-1",
            isWrong && "text-destructive",
            !selected && !isCorrect && !isWrong && "text-foreground"
          )}
        >
          {text}
        </span>
      </div>
    </motion.button>
  );
}
