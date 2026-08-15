import type { Question } from '@/data/questions';

/**
 * Client-side Groq integration.
 *
 * IMPORTANT — security model: this is a static, client-only site (GitHub
 * Pages has no backend). There is no server to hide a shared secret behind,
 * so we never ship an API key in the build. Instead, each player pastes
 * their OWN Groq API key into the browser, we store it only in that
 * browser's localStorage, and the browser calls Groq's API directly. The
 * key never touches our code/repo and is never sent anywhere but Groq.
 *
 * Get a free key at https://console.groq.com/keys
 */

const STORAGE_KEYS = {
  apiKey: 'mm_groq_api_key',
  enabled: 'mm_use_ai_questions',
  model: 'mm_groq_model',
  topic: 'mm_groq_topic',
} as const;

export const GROQ_MODELS = [
  { id: 'llama-3.3-70b-versatile', label: 'Llama 3.3 70B (recommended)' },
  { id: 'llama-3.1-8b-instant', label: 'Llama 3.1 8B (fastest)' },
  { id: 'openai/gpt-oss-120b', label: 'GPT-OSS 120B' },
] as const;

const DEFAULT_MODEL = GROQ_MODELS[0].id;

export function getStoredApiKey(): string {
  return localStorage.getItem(STORAGE_KEYS.apiKey) ?? '';
}

export function setStoredApiKey(key: string): void {
  if (key) localStorage.setItem(STORAGE_KEYS.apiKey, key);
  else localStorage.removeItem(STORAGE_KEYS.apiKey);
}

export function getAiQuestionsEnabled(): boolean {
  return localStorage.getItem(STORAGE_KEYS.enabled) === 'true';
}

export function setAiQuestionsEnabled(enabled: boolean): void {
  localStorage.setItem(STORAGE_KEYS.enabled, String(enabled));
}

export function getStoredModel(): string {
  return localStorage.getItem(STORAGE_KEYS.model) ?? DEFAULT_MODEL;
}

export function setStoredModel(model: string): void {
  localStorage.setItem(STORAGE_KEYS.model, model);
}

export function getStoredTopic(): string {
  return localStorage.getItem(STORAGE_KEYS.topic) ?? '';
}

export function setStoredTopic(topic: string): void {
  if (topic) localStorage.setItem(STORAGE_KEYS.topic, topic);
  else localStorage.removeItem(STORAGE_KEYS.topic);
}

const DIFFICULTY_PLAN: { difficulty: Question['difficulty']; count: number }[] = [
  { difficulty: 'easy', count: 5 },
  { difficulty: 'medium', count: 5 },
  { difficulty: 'hard', count: 4 },
  { difficulty: 'very-hard', count: 1 },
];

const VALID_LETTERS = ['A', 'B', 'C', 'D'];
const VALID_DIFFICULTIES = new Set(DIFFICULTY_PLAN.map(d => d.difficulty));

function buildPrompt(topic: string): string {
  const planLines = DIFFICULTY_PLAN.map(d => `- ${d.count} questions with "difficulty": "${d.difficulty}"`).join('\n');
  const topicLine = topic.trim()
    ? `Focus all questions on this theme/topic: "${topic.trim()}". Stay on-theme for every question.`
    : 'Cover a broad mix of general-knowledge topics (history, science, geography, pop culture, sports, literature, art) — vary the topic from question to question.';

  return `Generate exactly 15 trivia questions for a "Who Wants to Be a Millionaire"-style quiz game, ordered from easiest to hardest.

${topicLine}

Difficulty distribution (in this exact order, easiest first):
${planLines}

Rules:
- Each question has exactly 4 answer options labeled "A", "B", "C", "D".
- Exactly one option is correct; set "correctLetter" to that option's letter.
- Questions must have a single unambiguous correct answer, be factually accurate, and not depend on opinion or recent/changing facts (e.g. current office-holders, live scores).
- Keep question text under 160 characters and each option under 60 characters.
- Do not repeat topics or near-duplicate questions.
- Do not include any commentary, explanation, or markdown — respond with raw JSON only.

Respond with a single JSON object of this exact shape:
{
  "questions": [
    {
      "question": "string",
      "options": [
        { "letter": "A", "text": "string" },
        { "letter": "B", "text": "string" },
        { "letter": "C", "text": "string" },
        { "letter": "D", "text": "string" }
      ],
      "correctLetter": "A",
      "difficulty": "easy"
    }
  ]
}`;
}

export class GroqGenerationError extends Error {}

/** Basic shape/content validation so a malformed or hallucinated response
 * never reaches the game — any failure here triggers the caller's fallback
 * to the built-in question bank instead of crashing gameplay. */
function validateAndNormalize(raw: unknown): Question[] {
  if (!raw || typeof raw !== 'object' || !Array.isArray((raw as any).questions)) {
    throw new GroqGenerationError('Response was not a { questions: [...] } object.');
  }
  const questions = (raw as { questions: unknown[] }).questions;
  if (questions.length < 15) {
    throw new GroqGenerationError(`Expected 15 questions, got ${questions.length}.`);
  }

  const normalized: Question[] = questions.slice(0, 15).map((q, idx) => {
    if (!q || typeof q !== 'object') throw new GroqGenerationError(`Question ${idx + 1} is malformed.`);
    const { question, options, correctLetter, difficulty } = q as Record<string, unknown>;

    if (typeof question !== 'string' || !question.trim()) {
      throw new GroqGenerationError(`Question ${idx + 1} is missing text.`);
    }
    if (!Array.isArray(options) || options.length !== 4) {
      throw new GroqGenerationError(`Question ${idx + 1} does not have exactly 4 options.`);
    }
    const normOptions = options.map((o, i) => {
      if (!o || typeof o !== 'object') throw new GroqGenerationError(`Question ${idx + 1} option ${i + 1} is malformed.`);
      const { letter, text } = o as Record<string, unknown>;
      if (typeof letter !== 'string' || !VALID_LETTERS.includes(letter.toUpperCase())) {
        throw new GroqGenerationError(`Question ${idx + 1} option ${i + 1} has an invalid letter.`);
      }
      if (typeof text !== 'string' || !text.trim()) {
        throw new GroqGenerationError(`Question ${idx + 1} option ${i + 1} is missing text.`);
      }
      return { letter: letter.toUpperCase(), text: text.trim() };
    });
    const letters = normOptions.map(o => o.letter).sort();
    if (letters.join(',') !== VALID_LETTERS.join(',')) {
      throw new GroqGenerationError(`Question ${idx + 1} options must be exactly A, B, C, D.`);
    }
    if (typeof correctLetter !== 'string' || !VALID_LETTERS.includes(correctLetter.toUpperCase())) {
      throw new GroqGenerationError(`Question ${idx + 1} has an invalid correctLetter.`);
    }
    if (typeof difficulty !== 'string' || !VALID_DIFFICULTIES.has(difficulty as Question['difficulty'])) {
      throw new GroqGenerationError(`Question ${idx + 1} has an invalid difficulty.`);
    }

    return {
      id: idx + 1,
      question: question.trim(),
      options: normOptions,
      correctLetter: correctLetter.toUpperCase(),
      difficulty: difficulty as Question['difficulty'],
    };
  });

  // Re-order to match the ladder's easy → very-hard progression regardless
  // of the order the model returned them in.
  const byDifficulty = (d: Question['difficulty']) => normalized.filter(q => q.difficulty === d);
  const ordered = DIFFICULTY_PLAN.flatMap(({ difficulty, count }) => byDifficulty(difficulty).slice(0, count));
  if (ordered.length !== 15) {
    throw new GroqGenerationError('Response did not include the required difficulty distribution (5 easy / 5 medium / 4 hard / 1 very-hard).');
  }
  return ordered.map((q, i) => ({ ...q, id: i + 1 }));
}

/**
 * Calls Groq's OpenAI-compatible chat completions endpoint directly from
 * the browser and returns a validated, game-ready 15-question set.
 * Throws GroqGenerationError (or a network/HTTP error) on any failure —
 * callers should catch this and fall back to the static question bank.
 */
export async function generateQuestionsWithGroq(options?: {
  apiKey?: string;
  model?: string;
  topic?: string;
  signal?: AbortSignal;
}): Promise<Question[]> {
  const apiKey = options?.apiKey ?? getStoredApiKey();
  const model = options?.model ?? getStoredModel();
  const topic = options?.topic ?? getStoredTopic();

  if (!apiKey) {
    throw new GroqGenerationError('No Groq API key is set.');
  }

  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: 'system',
          content: 'You are a trivia question generator. You always respond with a single valid JSON object and nothing else.',
        },
        { role: 'user', content: buildPrompt(topic) },
      ],
      temperature: 0.9,
      response_format: { type: 'json_object' },
    }),
    signal: options?.signal,
  });

  if (!res.ok) {
    let detail = '';
    try {
      const body = await res.json();
      detail = body?.error?.message ?? '';
    } catch {
      // ignore — use status text below
    }
    if (res.status === 401) {
      throw new GroqGenerationError('Groq rejected the API key (401 Unauthorized). Check that the key is correct.');
    }
    if (res.status === 429) {
      throw new GroqGenerationError('Groq rate limit hit (429). Try again in a moment.');
    }
    throw new GroqGenerationError(`Groq request failed (${res.status}): ${detail || res.statusText}`);
  }

  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content;
  if (typeof content !== 'string') {
    throw new GroqGenerationError('Groq response was missing message content.');
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(content);
  } catch {
    throw new GroqGenerationError('Groq response was not valid JSON.');
  }

  return validateAndNormalize(parsed);
}
