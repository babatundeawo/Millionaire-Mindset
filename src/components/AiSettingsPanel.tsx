import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, Check, ExternalLink } from 'lucide-react';
import {
  GROQ_MODELS,
  getAiQuestionsEnabled,
  setAiQuestionsEnabled,
  getStoredApiKey,
  setStoredApiKey,
  getStoredModel,
  setStoredModel,
  getStoredTopic,
  setStoredTopic,
} from '@/lib/groq';

export function AiSettingsPanel() {
  const [open, setOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [model, setModel] = useState<string>(GROQ_MODELS[0].id);
  const [topic, setTopic] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setEnabled(getAiQuestionsEnabled());
    setApiKey(getStoredApiKey());
    setModel(getStoredModel());
    setTopic(getStoredTopic());
  }, []);

  const handleSave = () => {
    setStoredApiKey(apiKey.trim());
    setStoredModel(model);
    setStoredTopic(topic.trim());
    // Only allow AI mode to be enabled if a key is actually present.
    const canEnable = enabled && apiKey.trim().length > 0;
    setAiQuestionsEnabled(canEnable);
    setEnabled(canEnable);
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-6 text-left">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg border border-border/50 bg-card/40 backdrop-blur-sm text-sm text-muted-foreground hover:text-foreground hover:border-border transition-all"
        data-testid="ai-settings-toggle"
      >
        <span className="flex items-center gap-2 font-mono">
          <Sparkles className="w-4 h-4 text-primary" />
          AI-GENERATED QUESTIONS (GROQ)
          {getAiQuestionsEnabled() && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/20 text-primary font-bold">ON</span>
          )}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-2 p-4 rounded-lg border border-border/50 bg-card/60 backdrop-blur-sm space-y-4">
              <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                <input
                  type="checkbox"
                  checked={enabled}
                  onChange={e => setEnabled(e.target.checked)}
                  className="w-4 h-4 accent-primary"
                  data-testid="ai-enabled-checkbox"
                />
                Generate a fresh question set with AI each time I play
              </label>

              <div className="space-y-1.5">
                <label className="text-xs text-muted-foreground font-mono uppercase tracking-wide">
                  Groq API key
                </label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={e => setApiKey(e.target.value)}
                  placeholder="gsk_..."
                  className="w-full px-3 py-2 rounded border border-border/50 bg-background/60 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary"
                  data-testid="groq-api-key-input"
                />
                <p className="text-[11px] text-muted-foreground leading-snug">
                  Stored only in this browser (localStorage) and sent directly to Groq — never to us, never committed
                  to the repo.{' '}
                  <a
                    href="https://console.groq.com/keys"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-0.5"
                  >
                    Get a free key <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-muted-foreground font-mono uppercase tracking-wide">Model</label>
                <select
                  value={model}
                  onChange={e => setModel(e.target.value)}
                  className="w-full px-3 py-2 rounded border border-border/50 bg-background/60 text-sm text-foreground focus:outline-none focus:border-primary"
                  data-testid="groq-model-select"
                >
                  {GROQ_MODELS.map(m => (
                    <option key={m.id} value={m.id}>
                      {m.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-muted-foreground font-mono uppercase tracking-wide">
                  Topic (optional)
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={e => setTopic(e.target.value)}
                  placeholder="e.g. movies, world history, science — leave blank for general knowledge"
                  className="w-full px-3 py-2 rounded border border-border/50 bg-background/60 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary"
                  data-testid="groq-topic-input"
                />
              </div>

              <button
                onClick={handleSave}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-all"
                data-testid="ai-settings-save"
              >
                {saved ? (
                  <>
                    <Check className="w-4 h-4" /> Saved
                  </>
                ) : (
                  'Save settings'
                )}
              </button>

              <p className="text-[11px] text-muted-foreground/70 leading-snug">
                If AI generation fails or times out for any reason (bad key, rate limit, offline), the game
                automatically falls back to its built-in question bank so play is never blocked.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
