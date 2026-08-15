# Who Wants to Be a Millionaire — Mindset Edition

A 15-question trivia game in the style of "Who Wants to Be a Millionaire," built with React, TypeScript, Vite, and Tailwind CSS. Runs entirely client-side — no backend required.

**[Live demo](#)** — replace with your GitHub Pages URL once deployed (see below).

## What's in this build

This is a standalone, GitHub-Pages-ready extraction of the original Replit project (the multi-package workspace, database, and API-server scaffolding weren't needed for a client-side game, so they've been dropped to keep the repo simple to build and deploy).

Changes made in this pass:

- **Fixed a safe-zone (checkpoint) bug.** The prize ladder has two guaranteed "safe haven" checkpoints — $1,000 at question 5 and $32,000 at question 10. Previously, missing the *checkpoint question itself* still paid out that checkpoint's amount, because the payout logic secured the money one question too early. Now a checkpoint only locks in once you've *answered it correctly*; missing question 5 or question 10 pays $0 / $1,000 respectively, matching how the real game works. See `src/data/questions.ts` (`getGuaranteedPrize`).
- **Made the gameplay screen responsive.** The question/answer screen previously used a fixed two-column desktop layout (`grid-cols-[1fr_240px]`) with no mobile breakpoints, so it broke on phone-sized screens. It now stacks vertically (question + answers, then a scrollable prize ladder) on small screens, and switches to the original side-by-side layout on larger screens (`lg:` breakpoint and up). The prize ladder also now scrolls and auto-scrolls to keep the current level in view, rather than clipping rows off-screen.
- **Resized headings, buttons, and icons responsively** across the home and results screens so large celebratory text doesn't overflow small phone widths.
- **Switched to hash-based routing** (`/#/game`, `/#/result`) instead of browser-history routing. GitHub Pages serves static files with no server-side rewrites, so history-based routes 404 on a hard refresh or a direct link to `/game`. Hash routing avoids that entirely.
- **Set a relative build base** (`base: './'`) so the built app works correctly from any subpath, including a GitHub Pages project site at `https://<user>.github.io/<repo>/`.
- **Removed Replit-only tooling** (workspace `catalog:` package versions, the internal `@workspace/api-client-react` package, Replit dev-banner/cartographer/error-overlay plugins, and the `PORT`/`BASE_PATH` env vars vite previously required to even start) so `npm install && npm run build` works out of the box on any machine or CI runner.
- **Added a GitHub Actions workflow** that builds and deploys to GitHub Pages automatically on every push to `main`.
- Fixed a strict-mode TypeScript error in `PhoneFriendModal` (missing return on one code path).
- **Expanded the question bank from 150 to 297 questions** (80 easy, 86 medium, 70 hard, 61 very-hard), spanning geography, history, science, math, literature, art, mythology, and general knowledge. Every new question was checked for correct answer accuracy, four distinct options, and no duplicates against the existing bank. Since each playthrough only draws 5 easy + 5 medium + 4 hard + 1 very-hard question at random, this roughly doubles how many unique games you can play before seeing a repeat.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally to sanity-check it
```

## Deploy to GitHub Pages

1. Push this repo to GitHub (see below).
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab). The included workflow (`.github/workflows/deploy.yml`) builds the app and publishes `dist/` automatically.
4. Your game will be live at `https://<your-username>.github.io/<repo-name>/`.

No repo-name configuration is needed in the code — the build uses a relative asset base and hash-based routing, so it works at any GitHub Pages subpath without edits.

### Pushing this project to GitHub for the first time

```bash
cd millionaire-mindset
git init
git add .
git commit -m "Initial commit: responsive, GitHub Pages-ready millionaire game"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## AI-generated questions (Groq)

You can have the game generate a fresh 15-question set with AI instead of using the built-in bank, every time someone plays.

**How it works:** this is a static, client-only site — GitHub Pages has no backend to hide a shared API key behind. So instead, each player pastes their **own** Groq API key into a settings panel on the home screen. That key is stored only in their browser's `localStorage`, and their browser calls Groq's API directly — the key never touches the repo, the build, or any server of ours.

To enable it:

1. Get a free key at [console.groq.com/keys](https://console.groq.com/keys).
2. On the home screen, open **AI-generated questions (Groq)**, paste the key, optionally set a topic (e.g. "movies", "world history") or leave it blank for general knowledge, check "Generate a fresh question set with AI each time I play," and save.
3. Click **Play Now** — the game screen shows a short "Generating your quiz with AI…" loading state, then starts with the AI-written questions. A small "AI" badge appears next to the question counter so it's clear which mode is active.

**Fallback behavior:** if the key is missing/invalid, Groq rate-limits the request, the network is offline, or the model returns something that doesn't parse into a valid 15-question set (exactly 4 lettered options, one correct answer, right difficulty spread), the game automatically falls back to the built-in question bank and shows a brief on-screen notice — gameplay is never blocked by an AI failure.

Where this lives in the code:
- `src/lib/groq.ts` — settings storage (localStorage), the prompt sent to Groq, the fetch call to `https://api.groq.com/openai/v1/chat/completions`, and strict validation/normalization of the response into the app's `Question` type.
- `src/components/AiSettingsPanel.tsx` — the settings UI on the home screen.
- `src/pages/game.tsx` — loads the question set on mount (AI or fallback) before showing the first question.

**Note on cost/rate limits:** each playthrough with AI mode on makes one Groq API call from the player's browser, billed against *their* key. If you want a single shared key that all visitors use without each person needing their own (e.g. for a public demo), you'd need a small server-side proxy (a Cloudflare Worker or similar) to keep that key secret — GitHub Pages alone can't do this safely, since anything shipped in a static build is visible to anyone who opens dev tools.

## Game mechanics

- 15 questions, increasing in difficulty (5 easy, 5 medium, 4 hard, 1 very hard), randomly selected and shuffled each playthrough from a bank of 297 questions in `src/data/questions.ts`.
- Three lifelines: 50:50, Phone a Friend, Ask the Audience — each usable once per game.
- Two safe havens (checkpoints): reaching question 5 correctly locks in $1,000; reaching question 10 correctly locks in $32,000. Missing a question drops you to your last locked-in checkpoint (or $0 if you haven't cleared one yet).
- Walk away at any time to bank your current guaranteed amount.

## Tech stack

React 18 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · Radix UI · wouter (hash routing)
