import { Link } from 'wouter';
import { CompassIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] w-full relative overflow-hidden grain-overlay flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/15 rounded-full blur-[120px] spotlight-pulse" />
      </div>

      <div className="glass-panel gold-ring relative z-10 w-full max-w-md rounded-2xl p-8 text-center shadow-2xl">
        <CompassIcon className="w-12 h-12 mx-auto text-accent mb-4" />
        <h1 className="text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-display)]">
          Off the Board
        </h1>
        <p className="text-sm text-muted-foreground mb-6">
          That question isn't on the ladder. Let's get you back to the studio.
        </p>
        <Link
          href="/"
          className="group relative inline-flex items-center justify-center overflow-hidden px-8 py-3 rounded-xl bg-gradient-to-b from-primary to-primary/85 text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/30 transition-all"
        >
          <span className="shine-sweep opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative">BACK HOME</span>
        </Link>
      </div>
    </div>
  );
}
