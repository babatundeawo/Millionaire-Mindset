import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Phone, Users, Percent, Ban } from 'lucide-react';

interface LifelineButtonProps {
  type: '50-50' | 'phone' | 'audience';
  used: boolean;
  onClick: () => void;
  disabled: boolean;
}

export function LifelineButton({ type, used, onClick, disabled }: LifelineButtonProps) {
  const icons = {
    '50-50': Percent,
    'phone': Phone,
    'audience': Users
  };

  const labels = {
    '50-50': '50:50',
    'phone': 'Phone',
    'audience': 'Audience'
  };

  const Icon = icons[type];
  const isActive = !used && !disabled;

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || used}
      whileHover={isActive ? { scale: 1.06, y: -1 } : {}}
      whileTap={isActive ? { scale: 0.94 } : {}}
      transition={{ type: 'spring', stiffness: 450, damping: 25 }}
      className={cn(
        // Mobile: compact icon-only circle so three of these plus the rest
        // of the top bar fit on one row without wrapping.
        // sm+: original roomy labelled card.
        'group relative flex items-center justify-center gap-0 w-10 h-10 p-0 rounded-full',
        'sm:flex-col sm:justify-center sm:gap-1.5 sm:w-auto sm:h-auto sm:px-5 sm:py-3 sm:rounded-xl',
        'border transition-all duration-300 overflow-hidden',
        used && 'opacity-35 cursor-not-allowed border-muted bg-muted/10 grayscale',
        isActive && 'border-primary/50 bg-gradient-to-b from-primary/15 to-primary/5 hover:border-primary hover:shadow-lg hover:shadow-primary/20',
        !used && disabled && 'opacity-50 cursor-not-allowed border-primary/25 bg-primary/5'
      )}
      aria-label={labels[type]}
      data-testid={`lifeline-${type}`}
    >
      {isActive && (
        <span className="shine-sweep opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <Icon className={cn(
        'relative w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300',
        used && 'text-muted-foreground',
        !used && 'text-primary'
      )} />
      <span className={cn(
        'relative hidden sm:inline text-xs font-bold font-mono tracking-wide',
        used && 'text-muted-foreground line-through',
        !used && 'text-primary'
      )}>
        {labels[type]}
      </span>
      {used && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/10">
          <Ban className="w-4 h-4 sm:w-5 sm:h-5 text-destructive/70" strokeWidth={1.5} />
        </div>
      )}
    </motion.button>
  );
}
