# Customizing

Open a file on github.com, click the pencil icon, edit, and commit.

| To change | Edit |
| --- | --- |
| Colors (gold, blue, background) | `src/index.css`, the `:root` block. Values are HSL numbers. |
| Fonts | `src/main.tsx` (imports) and `--app-font-*` in `src/index.css` |
| Home page text | `src/pages/home.tsx` |
| Questions | `src/data/questions.ts` (each needs 4 options and one `correctLetter`) |
| Prize amounts and safe havens | `MONEY_LADDER` in `src/data/questions.ts` |
| Currency symbol | `formatCurrency` in `src/data/questions.ts` |
| Icons and social image | Replace the files in `public/` with the same names and sizes |
| Page title and description | `index.html` |
