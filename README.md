# Coaching Week 2026 — Landing Page

Static landing page for the free live event co-hosted by Seb Jauslin and Audrey Ghozael Ragonnaud during International Coaching Week 2026 (May 14).

## Preview locally

```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

## Placeholders to replace before launch

| Placeholder | File | What to put |
|---|---|---|
| `[REGISTRATION_URL_TBD]` | `index.html` (×3) | LinkedIn Live URL or Zoom registration link |
| `[TIME_TBD]` | `index.html` (×1) | Event time, e.g. `6:00 PM CET / 9:00 AM PST` |
| `assets/seb.jpg` | `assets/` | Seb's headshot — square, min 400×400px |
| `assets/audrey.jpg` | `assets/` | Audrey's headshot — square, min 400×400px |
| Target time in `script.js` | `script.js` line 2 | Update `2026-05-14T12:00:00Z` to actual UTC start time |

## Event duration

Set to ~60 min. To change, update the `~60 min` text in `index.html` (appears twice).

## Deployment options

**Netlify Drop** (easiest): Drag the entire project folder to [app.netlify.com/drop](https://app.netlify.com/drop).

**GitHub Pages**: Push to a repo, enable Pages in Settings → Pages → Deploy from branch `main` / `/ (root)`.

**Vercel**: `npx vercel` from the project directory, or import the GitHub repo on vercel.com.

No build step needed — the site is pure HTML/CSS/JS.

## Files

```
index.html          — page markup
styles.css          — all styles (mobile-first, CSS custom properties)
script.js           — soft countdown to May 14
PALETTE.md          — design tokens sourced from sebjauslin.com
assets/
  Seb-Jauslin-Logo.svg
  grid-tile.png
  seb.jpg           — PLACEHOLDER
  audrey.jpg        — PLACEHOLDER
  README.md         — asset replacement guide
```
