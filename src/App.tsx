import { MotionConfig } from 'framer-motion';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { useHashLocation } from 'wouter/use-hash-location';
import NotFound from '@/pages/not-found';
import Home from '@/pages/home';
import Game from '@/pages/game';
import Result from '@/pages/result';

// Hash routing (#/game, #/result): GitHub Pages has no server-side rewrites,
// so history-based routes would 404 on refresh.
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <button type="button" className="skip-link" onClick={() => document.getElementById('main')?.focus()}>
        Skip to content
      </button>
      <main id="main" tabIndex={-1} className="outline-none">
        <WouterRouter hook={useHashLocation}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/game" component={Game} />
            <Route path="/result" component={Result} />
            <Route component={NotFound} />
          </Switch>
        </WouterRouter>
      </main>
    </MotionConfig>
  );
}
