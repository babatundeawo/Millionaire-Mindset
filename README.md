<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/logo-dark.svg">
    <img src="docs/assets/logo-light.svg" alt="Millionaire Mindset logo" width="88">
  </picture>

# Millionaire Mindset

**A 15-question trivia game. Three lifelines. Two safe havens. ₦1,000,000 at the top.**

[![Build and deploy](https://github.com/babatundeawo/Millionaire-Mindset/actions/workflows/deploy.yml/badge.svg)](https://github.com/babatundeawo/Millionaire-Mindset/actions/workflows/deploy.yml)
[![Live site](https://img.shields.io/badge/live-play%20now-e9c15a)](https://babatundeawo.github.io/Millionaire-Mindset/)

[Play now](https://babatundeawo.github.io/Millionaire-Mindset/) · [Report an issue](https://github.com/babatundeawo/Millionaire-Mindset/issues)
</div>

## About

Millionaire Mindset is a free, browser-based quiz in the style of the classic TV show. It runs entirely on your device: no account, no download, no real money.

## Features

- 15 questions that rise from easy to very hard, drawn at random from a bank of 297
- Lifelines: 50:50, Phone a Friend and Ask the Audience, each usable once per game
- Safe havens at question 5 (₦1,000) and question 10 (₦32,000)
- Walk away at any time and keep your last secured prize
- Optional AI-generated question sets using your own free Groq API key
- Keyboard play (A–D or 1–4), sound effects with a mute button, and reduced-motion support

## How to play

Open the live site and press **Play now**. Pick an answer, then lock it in and wait for the reveal. To use AI questions, open **AI-generated questions** on the home screen, paste your Groq API key, and save. The key stays in your browser and is sent only to Groq. If AI generation fails, the game falls back to the built-in questions.

## Tech stack

React 18, TypeScript, Vite, Tailwind CSS v4, Framer Motion, Radix UI, wouter (hash routing).

## Project structure

```text
src/pages/        Home, Game, Result and Not-found screens
src/components/   Answer buttons, lifelines, prize ladder, modals, AI settings
src/data/         Question bank, prize ladder and prize rules
src/lib/groq.ts   Optional AI question generation
public/           Icons, social image, manifest, robots.txt, sitemap
docs/             Deployment and customization guides
```

## Contributing

Found a bug or have an idea? [Open an issue](https://github.com/babatundeawo/Millionaire-Mindset/issues). Pull requests are welcome through the GitHub website.

## Credits

Fonts: [Inter](https://rsms.me/inter/), [Fraunces](https://github.com/undercasetype/Fraunces) and [JetBrains Mono](https://www.jetbrains.com/lp/mono/), served by [Fontsource](https://fontsource.org) under the SIL Open Font License. Icons: [Lucide](https://lucide.dev).
