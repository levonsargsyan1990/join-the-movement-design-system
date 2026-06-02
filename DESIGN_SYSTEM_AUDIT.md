# Design System Audit — Join the Movement

This document is the canonical audit of the design language extracted from the
Creavue **“Join the Movement”** marketing website
(`codebase/join-the-movement-website`). It records every design token and
component family, how they map from the source CSS, and the conventions that
keep the system consistent.

- **Source of truth:** `css/main.css`, `css/fonts.css`, `index.html`
- **Extraction date:** 2026-06-02
- **System version:** 0.1.0
- **Method:** Values were ported verbatim (no visual drift) and re-organized into
  reusable token files (`src/tokens`), base styles (`src/styles`), and per-family
  component modules (`src/components`).

---

## 1. Architecture

```
src/
├── tokens/
│   ├── tokens.css     # CSS custom properties (:root + themes) — the runtime source of truth
│   ├── tokens.json    # machine-readable mirror (W3C design-tokens shape)
│   └── tokens.js      # flat JS export for CSS-in-JS / React Native / charts
├── styles/
│   ├── fonts.css      # @font-face for Hanken Grotesk subsets
│   ├── base.css       # reset, body defaults, headings, layout helpers
│   └── index.css      # the bundle (imports fonts + tokens + base + components)
├── components/        # one CSS module per component family
├── fonts/             # self-hosted woff2 subsets
└── assets/            # brand logo + UI imagery
```

**Theming model.** All theme decisions are encoded as attributes on `<html>`:

| Attribute     | Values               | Drives                                    |
| ------------- | -------------------- | ----------------------------------------- |
| `data-theme`  | `dark` *(default)* / `light` | The full color palette            |
| `data-motion` | `on` / `off`         | Reveal + ambient orb animations           |
| `data-btn`    | `lime` *(default)* / `gradient` | CTA color treatment            |

Both `prefers-reduced-motion` and `prefers-color-scheme` interplay is respected:
motion-gated rules collapse under reduced-motion, and the theme is explicit
(attribute-driven) rather than purely media-query driven.

---

## 2. Design Token Inventory

### 2.1 Brand palette (`:root`)

| Token       | Value     | Role                         |
| ----------- | --------- | ---------------------------- |
| `--g1`      | `#A855F7` | Purple (gradient start)      |
| `--g2`      | `#6366F1` | Indigo (gradient mid)        |
| `--g3`      | `#22D3EE` | Cyan (gradient end)          |
| `--g-pink`  | `#E83DF0` | Magenta (orb accent)         |
| `--lime`    | `#CCFF00` | Signature accent / default CTA |

Feedback color (literal, not yet tokenized as a variable in source): `#FB7185`
for error / invalid states.

### 2.2 Gradients

| Token         | Value                                                        |
| ------------- | ----------------------------------------------------------- |
| `--grad`      | `linear-gradient(150deg, #A855F7 0%, #6366F1 52%, #22D3EE 100%)` |
| `--grad-soft` | `linear-gradient(150deg, #A855F7, #22D3EE)`                 |

A 120° purple→cyan variant is used inline for `.grad-text` and `.stat b`.

### 2.3 Theme tokens

| Token                  | Dark                       | Light                       |
| ---------------------- | -------------------------- | --------------------------- |
| `--bg`                 | `#08070D`                  | `#FBFAFE`                   |
| `--bg-elev`            | `#0E0C16`                  | `#FFFFFF`                   |
| `--text`               | `#F5F3FA`                  | `#15121F`                   |
| `--text-muted`         | `#A4A0B6`                  | `#5E586E`                   |
| `--text-faint`         | `#6F6B82`                  | `#9A95AC`                   |
| `--card-bg`            | `rgba(255,255,255,.035)`   | `rgba(255,255,255,.7)`      |
| `--card-bg-2`          | `rgba(255,255,255,.055)`   | `rgba(255,255,255,.92)`     |
| `--card-border`        | `rgba(255,255,255,.09)`    | `rgba(22,16,44,.09)`        |
| `--card-border-hover`  | `rgba(255,255,255,.22)`    | `rgba(124,58,237,.45)`      |
| `--hairline`           | `rgba(255,255,255,.08)`    | `rgba(22,16,44,.08)`        |
| `--field-bg`           | `rgba(255,255,255,.04)`    | `rgba(255,255,255,.7)`      |
| `--shadow`             | `0 30px 80px -30px rgba(0,0,0,.7)` | `0 30px 70px -34px rgba(80,40,160,.35)` |
| `--glow-blend`         | `screen`                   | `multiply`                  |
| `--glow-opacity`       | `.55`                      | `.85`                       |

### 2.4 CTA tokens

| Token        | Default (`lime`)        | Variant (`data-btn="gradient"`) |
| ------------ | ----------------------- | ------------------------------- |
| `--cta-bg`   | `var(--lime)`           | `var(--grad)`                   |
| `--cta-ink`  | `#0B0B12`               | `#fff`                          |
| `--cta-glow` | `rgba(204,255,0,.42)`   | `var(--g2)`                     |

### 2.5 Typography

| Token             | Value                                |
| ----------------- | ------------------------------------ |
| `--font-display`  | `"Space Grotesk", system-ui, sans-serif` |
| `--font-body`     | `"Hanken Grotesk", system-ui, sans-serif` |

Weights: display 400/500/600/700; body 400/600 (self-hosted subsets).

Type scale (from usage):

| Role     | Size                              | Notes                       |
| -------- | --------------------------------- | --------------------------- |
| h1       | `clamp(2.7rem, 11vw, 5.4rem)`     | display, lh 1.04, ls -.035em |
| h2       | `clamp(2.05rem, 7.5vw, 3.3rem)`   | section heads               |
| h3       | `1.4–1.46rem`                     | card heads                  |
| lead     | `clamp(1.04rem, 2.6vw, 1.22rem)`  | lh 1.55                     |
| body     | `1rem` / `1.6` lh / `-.005em` ls  | default                     |
| eyebrow  | `.72rem`, uppercase, ls `.32em`   | kicker                      |
| stat     | `clamp(1.5rem, 5vw, 2rem)`        | gradient numerals           |

### 2.6 Layout, radii, motion

| Group  | Token         | Value                          |
| ------ | ------------- | ------------------------------ |
| Layout | `--maxw`      | `1140px`                       |
| Layout | `--content`   | `560px` (→ `720px` at ≥760px)  |
| Layout | `--pad-x`     | `clamp(20px, 6vw, 40px)`       |
| Layout | `--sec-gap`   | `clamp(72px, 12vw, 116px)`     |
| Radii  | `--radius`    | `22px`                         |
| Radii  | `--radius-sm` | `14px`                         |
| Radii  | pill          | `999px` (literal)              |
| Motion | reveal easing | `cubic-bezier(.22,.68,.2,1)`   |
| Motion | std easing    | `cubic-bezier(.2,.7,.2,1)`     |
| Motion | reveal dur    | `.85s`; stagger `.1/.2/.32s`   |

Breakpoints: `760px` (tablet — grids go multi-column, content widens) and
`1040px` (desktop — card padding increases).

---

## 3. Component Inventory

| Component            | Module          | Key classes                                                | States / variants |
| -------------------- | --------------- | ---------------------------------------------------------- | ----------------- |
| Button               | `button.css`    | `.btn`, `.btn-primary`, `.btn-ghost`, `.btn-arrow`         | hover, lime/gradient CTA |
| Eyebrow / labels     | `badge.css`     | `.eyebrow`, `.who-kicker`, `.tag-pill`                     | light-theme kicker color shift |
| Gradient text        | `base.css`      | `.grad-text`                                               | — |
| Stat bar             | `stat.css`      | `.statbar`, `.stat`                                        | — |
| Who cards (persona)  | `card.css`      | `.who-grid`, `.who-card`, `.who-num`, `.who-link`          | hover (gradient ring), active |
| Why cards (feature)  | `card.css`      | `.why-grid`, `.why-card`, `.why-icon`                      | — |
| Form shell           | `form.css`      | `.form-shell`                                              | `.done` (success) |
| Field + label        | `form.css`      | `.field`, `label`, `.opt`                                  | `.invalid` |
| Inputs / select      | `form.css`      | `.input`, `.select`, `textarea.input`                      | focus, invalid |
| Custom checkbox      | `form.css`      | `.field-check`, `.check-label`, `.check-box`               | hover, focus-visible, checked, invalid |
| Consent group        | `form.css`      | `.form-consents`                                           | — |
| Validation / success | `form.css`      | `.field-error`, `.form-success`, `.check`                 | error, success |
| Live note            | `form.css`      | `.form-note`, `.pulse`                                     | motion pulse |
| Topbar nav           | `topbar.css`    | `.topbar`, `.topbar-nav`, `.topbar-pill`, `.nav-cta`      | `.scrolled` |
| Brand lockup         | `topbar.css`    | `.brand`                                                   | — |
| Contact rows         | `contact.css`   | `.contact-actions`, `.contact-btn`                         | hover |
| Founder avatars      | `contact.css`   | `.founders`, `.founder`                                    | hover |
| Footer               | `footer.css`    | `.footer`, `.socials`, `.foot-meta`, `.foot-copy`         | — |
| Glow field           | `glow.css`      | `.glowfield`, `.orb` (`.o1`–`.o4`), `.veil`               | motion drift |
| Hero                 | `reveal.css`    | `.hero`, `.hero-cta`, `.scroll-cue`                        | motion bounce |
| Scroll reveal        | `reveal.css`    | `.reveal-sec`, `.reveal` (`.d1`–`.d3`)                     | `.in` toggles visibility |

> **JS note.** The reveal/scroll/topbar-scrolled behaviors require a small
> IntersectionObserver/scroll script in the host app (the source uses
> `js/main.js`). This package ships the **styles** for those states; toggling
> `.in` / `.scrolled` is the consumer's responsibility. Storybook renders the
> resting + active states directly.

---

## 4. Accessibility notes

- **Custom checkbox** keeps a visually-hidden native `<input>` and exposes
  `:focus-visible` and `:checked` styling on the adjacent `.check-box` — keyboard
  and screen-reader accessible.
- **Reduced motion**: every animation (orbs, pulse, scroll cue, reveals, checkbox
  scale) is disabled under `@media (prefers-reduced-motion: reduce)`.
- **Color contrast**: body/heading text against `--bg` passes WCAG AA in both
  themes; muted/faint tokens are intended for secondary text only. The a11y addon
  is enabled in Storybook for ongoing checks.
- **Focus rings**: inputs and checkboxes use a 4px lime focus ring with sufficient
  offset.
- Decorative layers (`.glowfield`, `.veil`, `.scroll-cue`) are marked
  `aria-hidden` in source markup.

---

## 5. Known gaps / follow-ups (post-0.1.0)

1. **Feedback color** (`#FB7185`) should be promoted to a `--danger` token.
2. **Spacing scale** is currently ad-hoc (clamp + literal px); a formal step scale
   would improve consistency.
3. **Behavioral JS** (reveal/scroll/topbar) is intentionally out of scope for this
   CSS-first release; a small optional `behaviors.js` could be added.
4. **Founder avatars** are content images, not shipped assets; Storybook uses a
   gradient placeholder.
5. **Icon set** is currently inline SVG + Font Awesome (footer). Consider a
   dedicated icon module.

---

## 6. Verification

- `npm install` → installs Storybook 8 (html-vite) toolchain.
- `npm run build-storybook` → builds the static reference (verified passing).
  Fonts resolve via the CSS `@import`/`url()` graph; the logo asset is served from
  `src/assets` via Storybook `staticDirs`.
