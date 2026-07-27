import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Phone, Users, Percent } from 'lucide-react';

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

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || used}
      whileHover={!disabled && !used ? { scale: 1.05 } : {}}
      whileTap={!disabled && !used ? { scale: 0.95 } : {}}
      className={cn(
        "relative flex flex-col items-center gap-2 px-6 py-4 rounded-lg border-2 transition-all duration-300",
        used && "opacity-40 cursor-not-allowed border-muted bg-muted/20",
        !used && !disabled && "border-primary bg-primary/10 hover:bg-primary/20 hover:border-primary/80",
        !used && disabled && "opacity-60 cursor-not-allowed border-primary/40 bg-primary/5"
      )}
      data-testid={`lifeline-${type}`}
    >
      <Icon className={cn(
        "w-8 h-8",
        used && "text-muted-foreground",
        !used && "text-primary"
      )} />
      <span className={cn(
        "text-sm font-bold font-mono",
        used && "text-muted-foreground line-through",
        !used && "text-primary"
      )}>
        {labels[type]}
      </span>
      {used && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-0.5 bg-destructive rotate-12" />
        </div>
      )}
    </motion.button>
  );
}
