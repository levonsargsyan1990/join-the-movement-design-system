# Join the Movement — Design System

A framework-agnostic design system extracted from the Creavue **“Join the Movement”** marketing website. It packages the brand’s **design tokens**, **CSS components**, and **self-hosted fonts** into an independent, reusable library.

> Built to be consumed from any stack — vanilla HTML, React, Vue, Svelte — because it ships plain CSS custom properties and class-based components, not framework bindings.

> 📖 **Looking for the live preview?** The Storybook documentation lives in its own
> repo: **[creavue-storybook](https://github.com/levonsargsyan1990/creavue-storybook)**.
> This repository is the *library only* — no build tooling, no framework deps.

---

## ✨ What’s inside

- **Design tokens** — colors, gradients, dual themes (dark/light), typography, spacing, radii, shadows, motion — as CSS variables (`tokens.css`), plus machine-readable `tokens.json` and a JS export (`tokens.js`).
- **CSS components** — buttons, badges/eyebrows, cards, forms (inputs, selects, textareas, custom checkboxes), navigation pills, stats, contact rows, footer, and the signature animated glow field.
- **Self-hosted fonts** — Hanken Grotesk (body) subsets. Space Grotesk (display) is loaded from Google Fonts.

This is a **zero-dependency, no-build** package — just CSS, tokens, and fonts.

---

## 📦 Using the design system in a project

### 1. Everything at once
Import the bundle, which pulls in fonts, tokens, base styles, and all components.
Via a bundler you can use the bare package specifier (resolves to `index.css`):
```css
@import "join-the-movement-design-system";
```
…or the explicit path (also exported):
```css
@import "join-the-movement-design-system/src/styles/index.css";
```

### 2. Tokens only
```css
@import "join-the-movement-design-system/tokens.css";
```
```js
import tokens from "join-the-movement-design-system/tokens.json" assert { type: "json" };
import { colors, typography } from "join-the-movement-design-system/tokens.js";
```

### 3. Set the theme
The theme is driven by a `data-theme` attribute on `<html>`:
```html
<html data-theme="dark"  data-motion="on" data-btn="lime">
<!-- or -->
<html data-theme="light" data-motion="on" data-btn="gradient">
```
| Attribute     | Values              | Effect                                            |
| ------------- | ------------------- | ------------------------------------------------- |
| `data-theme`  | `dark` \| `light`   | Switches the full color palette                   |
| `data-motion` | `on` \| `off`       | Enables/disables reveal + glow animations         |
| `data-btn`    | `lime` \| `gradient`| CTA buttons use the lime accent or brand gradient |

### 4. Use a component
```html
<a class="btn btn-primary" href="#">Join the Waitlist <span class="btn-arrow">→</span></a>
<span class="eyebrow">Authentic by design</span>
<h1>Join the <span class="grad-text">Creavue</span> movement</h1>
```

---

## 🗂 Repository structure

```
join-the-movement-design-system/
├── src/
│   ├── tokens/        # tokens.css, tokens.json, tokens.js
│   ├── styles/        # fonts.css, base.css, index.css (the bundle)
│   ├── components/    # one CSS module per component family
│   ├── fonts/         # self-hosted Hanken Grotesk woff2 subsets
│   └── assets/        # brand logo + UI imagery
├── docs/              # contributing + usage notes
├── DESIGN_SYSTEM_AUDIT.md
├── package.json
└── README.md
```

> Storybook (config + stories) is **not** part of this repo — it lives in
> [creavue-storybook](https://github.com/levonsargsyan1990/creavue-storybook),
> which consumes this package as a Git dependency.

---

## 🎨 Token inventory (summary)

| Group       | Examples                                                                 |
| ----------- | ------------------------------------------------------------------------ |
| Brand color | `--g1` `#A855F7`, `--g2` `#6366F1`, `--g3` `#22D3EE`, `--g-pink` `#E83DF0`, `--lime` `#CCFF00` |
| Gradients   | `--grad`, `--grad-soft`                                                   |
| Theme (dark/light) | `--bg`, `--bg-elev`, `--text`, `--text-muted`, `--text-faint`, `--card-bg`, `--card-border`, `--hairline`, `--field-bg`, `--shadow` |
| Typography  | `--font-display` (Space Grotesk), `--font-body` (Hanken Grotesk)          |
| Layout      | `--maxw`, `--content`, `--pad-x`, `--sec-gap`                             |
| Radii       | `--radius` `22px`, `--radius-sm` `14px`                                   |
| CTA         | `--cta-bg`, `--cta-ink`, `--cta-glow`                                     |

Full details, including the dark/light value tables, live in **[DESIGN_SYSTEM_AUDIT.md](./DESIGN_SYSTEM_AUDIT.md)**.

---

## 🧩 Component inventory (summary)

Buttons · Eyebrow & badges · Gradient text · Stat bar · Who cards · Why cards · Form fields (input / select / textarea) · Custom checkboxes · Form states (error / success) · Navigation pills (topbar) · Contact rows · Founder avatars · Footer · Glow field (orbs). See the audit for the complete list with class names.

---

## 🛠 Source of truth

This library was extracted from `codebase/join-the-movement-website` (the live marketing site). The CSS values are ported faithfully so the design system stays visually identical to production. The audit documents every mapping.

---

## 📄 License

[MIT](./LICENSE) © Creavue
