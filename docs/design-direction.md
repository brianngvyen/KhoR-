# KhoR — Homepage Design Direction (Proposal)

Status: **awaiting approval** — no homepage implementation has started.

## 1. What I inspected

Current project: Next.js 16.4.5 (App Router), React 19.3, TypeScript strict, Tailwind CSS v4
via `@tailwindcss/turbopack`, `cacheComponents` and `partialPrefetching` enabled, Geist +
Geist Mono loaded through `next/font`. The app is still the create-next-app starter
(`src/app/page.tsx`), so there is no existing design system to preserve beyond the toolchain.

Reference review (public markup/rendered text): Paper Rex, 100 Thieves, G2, Fnatic, T1, Gen.G,
Team Liquid. Sentinels is a client-rendered app, so only its metadata was readable.

Common patterns worth adapting — not copying:

- One full-bleed, single-message hero. No carousel of five competing messages.
- A persistent nav with one obvious commercial/competitive action.
- Roster content presented as a first-class product, not a thumbnail grid.
- Editorial news rhythm: one lead story, then a compact list.
- A schedule/status strip that makes the site feel live.
- Community treated as a section with its own visual identity, not a footer link.

## 2. Concept

**"The Standard."** KhoR should read like an organization with a code, not a clan with a logo.
The visual language borrows from broadcast sports and editorial design: hairline rules,
scoreboard numerals, mono metadata, oversized type, and a lot of intentional empty space.
Violet is used as a *signal* — the way a highlight color works on a broadcast HUD — not as a
wash over every surface.

Copy strategy: confident and forward-looking. No invented trophies, rankings, win rates,
player names, or partner logos. Where real facts don't exist yet, the site says what KhoR is
building rather than implying a history it doesn't have.

## 3. Visual system

### Palette

| Token | Value | Use |
| --- | --- | --- |
| `ink-950` | `#070609` | Page background |
| `ink-900` | `#0B0910` | Section alternation |
| `ink-800` | `#121017` | Raised surfaces, cards |
| `line` | `rgba(255,255,255,0.10)` | Hairline rules and borders |
| `bone` | `#F2EFF6` | Primary text; one inverted section |
| `muted` | `#948D9F` | Secondary text (AA on ink) |
| `violet-600` | `#7C3AED` | Primary action fill (5.6:1 with white) |
| `violet-400` | `#A78BFA` | Accent text, focus ring, hover |
| `violet-200` | `#C4B5FD` | Small accent text on dark (AA) |

Gradients: at most one radial violet bloom per viewport, at low opacity, plus a fine grain
layer. No multicolor meshes.

### Typography

- **Display:** Archivo (variable) — uppercase, tight tracking (`-0.03em`), weight 700–800.
  Optionally narrowed via the width axis for the hero only.
- **Body:** Geist Sans (already installed) — 16–18px, 1.6 line height.
- **Meta/labels:** Geist Mono (already installed) — 11–12px, uppercase, `0.14em` tracking.
- Numerals are tabular wherever they read as data.

This adds one Google font and zero npm packages.

### Layout & surfaces

- 12-column grid, max content width 1320px, gutters 20 / 32 / 48px.
- Section padding `clamp(88px, 12vw, 160px)`; sections separated by full-bleed hairlines.
- Corners are square or 2px. Buttons are rectangles, not pills. No floating glass cards.
- One inverted bone section (tryouts) to break the dark rhythm and create hierarchy.
- Mobile is designed, not collapsed: roster becomes a ledger, news becomes a list, the hero
  re-orders so the headline always precedes the art.

### Motion

- Entrance: opacity + 16px rise, 600ms, staggered 60ms, one small `IntersectionObserver`
  wrapper — no animation library.
- Hover: 240–320ms border/arrow/translate changes.
- All motion disabled under `prefers-reduced-motion`.
- No parallax, no scroll-jacking, no animated gradients.

## 4. Homepage structure

### 1. Header

Sticky, transparent over the hero, then solid ink with a bottom hairline and blur after
~24px of scroll. Left: typographic `KhoR` wordmark (final R carries the violet accent) plus
a compact `K/` monogram used on mobile. Center/right: Teams, News, Tryouts, Community, About.
Right: `Apply` primary button. Mobile: full-screen sheet, large type, `Esc` to close, focus
returned to the trigger, background scroll locked, `aria-expanded` wired.
A skip link precedes everything.

### 2. Hero

Full viewport (`min-h-[92svh]`), full-bleed ink.

- Eyebrow: mono, pulsing dot, `KHO — COMPETITIVE DIVISION / VALORANT`.
- Headline: **PLAY LIKE IT MATTERS.** set in three lines, maximum ~7 characters per line
  on desktop, `clamp()` down to mobile.
- Subhead: one sentence about discipline, preparation, and the people who show up.
- Actions: `Apply to compete` (violet) and `Meet the roster` (outline, arrow).
- Right: a tall 4:5 "broadcast plate" — layered violet bloom, 1px grid, corner brackets,
  oversized `K` monogram, mono labels (`VALORANT`, `MAIN ROSTER`, `TRYOUTS OPEN/CLOSED`).
  This is deliberate brand art, not a stock photo, and swaps for a real team photo later.
- Bottom rail: hairline with three factual/structural items (title, roster size, application
  state) and a scroll cue.
- Ghosted oversized `KHOR` wordmark clipped at the section edge for scale.
- One CSS-only entrance stagger; nothing blocks first paint.

### 3. Featured VALORANT team

A **roster ledger**, not five identical cards:

- Left (5/12): section label, headline, short paragraph, `View full roster` link, and one
  large portrait plate for the team.
- Right (7/12): five rows — jersey number, IGN, role, region, status. Hairline separators,
  violet fill sweep on hover, arrow at the end. Rows are links to player pages later.
- Mobile: plate first, then the ledger.
- Roster data lives in `src/content/team.ts` with clearly marked placeholder entries. No
  invented player names are presented as real people; placeholder identity is obvious in the
  source and easy to replace in one file.

### 4. News & announcements

Asymmetric editorial grid:

- Lead story: tall image plate, category chip, headline, excerpt, date, arrow.
- Three follow-up rows: index, category, title, date, arrow, hairline separators.
- `All news` link in the section header.
- Content lives in `src/content/news.ts`. Headlines are evergreen/editorial (process,
  standards, tryouts) rather than fake match results or signings.

### 5. Tryouts / recruitment

The single inverted (bone) section.

- Left: large statement — `YOUR RANK ISN'T THE STORY. YOUR DISCIPLINE IS.` — plus a short
  paragraph and the primary CTA.
- Right: four numbered steps (Apply → Review → Trial → Decision) in a 2×2 grid, plus a row of
  mono eligibility chips.
- CTA state is driven by a single `tryoutsOpen` flag in `src/content/site.ts`:
  - open → `Start application` links to `/tryouts`
  - closed → `Applications open soon` disabled state + Discord link
- No form is embedded on the homepage and nothing pretends to submit anywhere.

### 6. Community / Discord

Full-bleed dark band with one large centered idea: **THE FIFTH PLAYER IS THE CROWD.**

- Discord CTA (brand icon + label), plus three small pillars framed as what KhoR is building:
  watch parties, community scrims, creator program.
- If no invite URL is configured, the button renders as an honest disabled `Discord — coming
  soon` state rather than a dead `#` link.

### 7. Footer

Four columns: brand + one-line positioning + configured socials; Explore; Compete (Tryouts,
Applications, Application status); Connect. Hairline legal row with copyright and privacy /
terms placeholders. Oversized clipped wordmark as the closing graphic. No newsletter form
(there is no backend to receive it).

## 5. Honesty & future functionality

- A typed content layer (`src/content/*`) is the seam where a CMS/DB replaces static data
  later; components won't need rewriting.
- `/applications` status tracking implies auth and a database. Until those exist, the page
  will explain what's coming and link to the manual process. No fake lookup.
- Application, staff, and creator forms will be built only with a real persistence path
  (server actions + validation + a database), including error, duplicate, and rate-limit
  states. None of that is implied by the homepage.
- Admin review dashboard is a separate, authenticated surface — out of scope until the data
  model exists.

## 6. Accessibility & performance commitments

- Semantic landmarks, one `h1`, ordered headings, skip link, visible violet focus ring.
- Contrast-checked pairs from the palette above (violet-600 + white for fills; violet-200 for
  small accent text on ink).
- 44px minimum targets, keyboard-operable nav and menu, `aria-current` for the active route.
- `prefers-reduced-motion` honored globally.
- Server components by default; only the header and the reveal wrapper are client components.
- No new runtime dependencies; one additional font; SVG art instead of image payloads;
  `next/image` reserved for real photography later.
- Verify with `npm run lint` and `npm run build` after implementation.

## 7. Planned files (on approval)

```
docs/design-direction.md              this proposal
src/app/layout.tsx                    fonts, metadata, skip link, header/footer
src/app/page.tsx                      homepage composition only
src/app/globals.css                   tokens, base styles, grain/grid utilities
src/components/layout/site-header.tsx
src/components/layout/site-footer.tsx
src/components/layout/mobile-nav.tsx
src/components/ui/logo.tsx
src/components/ui/button.tsx
src/components/ui/eyebrow.tsx
src/components/ui/section-heading.tsx
src/components/ui/reveal.tsx
src/components/media/portrait-plate.tsx
src/components/home/hero.tsx
src/components/home/roster-section.tsx
src/components/home/news-section.tsx
src/components/home/tryouts-section.tsx
src/components/home/community-section.tsx
src/content/site.ts                   nav, socials, flags (tryoutsOpen, discord URL)
src/content/team.ts                   placeholder roster
src/content/news.ts                   placeholder editorial entries
src/lib/cn.ts                         tiny class-merge helper
```

Routes for Teams / News / Tryouts / Applications / Community / About come in the next phase,
sharing the same header, footer, and tokens.

## 8. Decisions to confirm

1. **Headline direction:** "Play like it matters" (recommended) vs. a colder line like
   "Built for the next round."
2. **One bone (off-white) section** for tryouts — recommended for hierarchy, but it departs
   from an all-dark page.
3. **Placeholder strategy:** abstract typographic player plates + obvious placeholder data,
   versus waiting for real photography and roster info before building the team section.
4. **Social links / Discord invite:** provide real URLs now, or ship config-driven
   "coming soon" states until they exist.
