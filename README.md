# [PROGRAM_NAME_TBD] — Sales Page

Sales page for the 6-month leadership coaching program by Seb Jauslin and Audrey Ghozael Ragonnaud.
Static HTML/CSS/JS — no build step, no framework.

## Preview locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080` (EN) and `http://localhost:8080/fr/` (FR).

---

## Placeholders to replace before launch

| Placeholder | File(s) | What to put |
|---|---|---|
| `[PROGRAM_NAME_TBD]` | `index.html`, `fr/index.html` (`<title>`, footer) | The program name, e.g. *The Leadership Arc* |
| `[CHECKOUT_URL_TBD]` | `index.html` (×4), `fr/index.html` (×4) | Stripe payment link, Calendly application call, or Tally form URL |

**To swap:** search for the placeholder string in each file and replace all occurrences.

### Program name options
- **The Leadership Arc** — evokes a journey with direction and shape; works in EN and FR
- **Leading from Within** — focuses on the inner dimension; translates naturally (*Diriger de l'intérieur*)
- **Elevate** — short, executive-friendly, works across languages

---

## Deploy to SiteGround

### 1 — Create the subdomain

1. Log in to SiteGround → **Site Tools** → **Domain** → **Subdomains**.
2. Enter the subdomain prefix (e.g. `program`) and select the root domain (`sebjauslin.com`).
3. Click **Create**. Note the document root shown — typically: `public_html/program.sebjauslin.com/`

### 2 — Upload files

**Option A — File Manager (browser)**

1. Site Tools → **File Manager**.
2. Navigate to `public_html/program.sebjauslin.com/`.
3. Upload the files below, preserving the folder structure:

```
index.html
styles.css
script.js
fr/
  index.html
assets/
  seb.jpg
  audrey.jpg
  grid-tile.png
```

**Option B — SFTP**

Connect with your SiteGround SFTP credentials (Site Tools → **SFTP & SSH**) and transfer the same structure to the document root.

### 3 — Verify

- `https://program.sebjauslin.com` → English page loads with announcement bar + countdown.
- `https://program.sebjauslin.com/fr/` → French page loads.
- Language switcher (EN | FR) works in both directions.
- All **SAVE YOUR SPOT** buttons link to the checkout URL (replace `[CHECKOUT_URL_TBD]` first).

### 4 — Optional: cache headers (.htaccess)

Drop this file in `public_html/program.sebjauslin.com/` to cache static assets:

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 month"
  ExpiresByType image/png  "access plus 1 month"
  ExpiresByType image/svg+xml "access plus 1 month"
  ExpiresByType text/css  "access plus 1 week"
  ExpiresByType application/javascript "access plus 1 week"
</IfModule>
```

No Python, Node, build tools, or server config are required. All paths in HTML and CSS are relative — the site works from any subfolder.

---

## File structure

```
index.html          — EN sales page
fr/
  index.html        — FR sales page (same structure, relative paths)
styles.css          — all styles (shared by EN and FR)
script.js           — countdown + announcement bar dismiss (shared)
PALETTE.md          — design tokens sourced from sebjauslin.com
assets/
  seb.jpg           — Seb Jauslin headshot (square, 400×400 min)
  audrey.jpg        — Audrey Ghozael headshot (square, 400×400 min)
  grid-tile.png     — subtle grid background texture
  README.md         — asset notes
```

## Founding cohort offer

The countdown and 25% discount target **May 31, 2026 at 23:59 CEST (Europe/Zurich)**.
This is hardcoded in `script.js` as `2026-05-31T21:59:00Z` (UTC equivalent).
To change the deadline, update that date string in `script.js`.
