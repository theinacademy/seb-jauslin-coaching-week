# Palette — Coaching Week 2026 Landing

All values sourced directly from sebjauslin.com CSS (Divi inline styles and Google Fonts link).

## Colors

| Token | Hex | Source |
|---|---|---|
| `--white` | `#FFFFFF` | Hero / Footer section background |
| `--cream` | `#faf0e2` | `.et_pb_section_1.et_pb_section` background |
| `--lavender` | `#eae7ec` | `.et_pb_section_3.et_pb_section` background |
| `--black` | `#000000` | Text, buttons (`background-color:#000000` on `.et_pb_button_0`) |
| `--accent` | `#FF5757` | Logo SVG gradient stop, eyebrow/accent text |
| `--accent-dark` | `#C21A1A` | Logo SVG gradient start |
| `--border` | `#D4D1D7` | `.et_pb_menu` nav dropdown border |
| `--shadow` | `rgba(0,0,0,0.25)` | Section box-shadow `0px 17px 117px rgba(0,0,0,0.25)` |

## Typography

| Role | Font | Weight | Size | Notes |
|---|---|---|---|---|
| H1 large | Kanit | 300 | 48–72px (clamp) | uppercase, line-height 1.1 |
| H2 section | Kanit | 700 | 24px | uppercase, letter-spacing 0.04em |
| Buttons | Kanit | 500 | 14–16px | uppercase, letter-spacing 0.08em |
| Body text | Inter | 300 | 17–20px (clamp) | line-height 1.6 |
| Eyebrow | Inter | 700 | 12px | uppercase, letter-spacing 0.18em |
| Small / caption | Inter | 300 | 14–15px | — |

Google Fonts used on sebjauslin.com: `Montserrat`, `Poppins`, `Inter`, `Kanit`, `ABeeZee`.  
This landing page uses only **Kanit** and **Inter** — the two dominant fonts in the Divi CSS.

## Button

```css
background: #000000;
color: #FFFFFF;
border-radius: 44px;     /* from .et_pb_button_0 */
font-family: 'Kanit';
font-weight: 500;
text-transform: uppercase;
padding: 14px 36px;
```
Hover: `background: #FF5757`

## Section Stacking Effect

```css
border-radius: 72px 72px 0 0;
overflow: hidden;
margin-top: -72px;
box-shadow: 0px 17px 117px rgba(0, 0, 0, 0.25);
```
Sourced from `.et_pb_section_1`, `.et_pb_section_2`, etc.

## Grid Tile

White sections use a repeating subtle grid PNG:  
`assets/grid-tile.png` (downloaded from sebjauslin.com/wp-content/uploads/2024/03/Grid-background-tile.png)

## Max Content Width

`1100px` — approximated from Divi row max-width observed as `1780px` header; content rows tighter at ~1080px.

## Audrey / Happy Success layer

| Token | Hex | Role |
|---|---|---|
| `--color-accent-secondary` | `#751CBF` | Happy Success purple |

**Semantic split:**
- Gold (`--accent-gold`) = urgency / CTA / Seb side
- Purple (`--color-accent-secondary`) = expansion / depth / Audrey side

**Where purple appears (5 spots):**
1. Left border on manifesto blockquotes (replaces red `--accent`)
2. H2 underline bar in `#being` section
3. H2 underline bar in `#guides` section
4. Arrow on 2nd shift card (`.shift-card--purple`)
5. Footer link color for happysuccess.fr
