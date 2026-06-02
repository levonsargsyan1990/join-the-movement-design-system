# Contributing

Thanks for helping evolve the **Join the Movement** design system.

## Principles

1. **Tokens first.** New visual values go into `src/tokens/tokens.css` (and mirror
   them in `tokens.json` + `tokens.js`). Components must consume tokens, never
   hard-code raw colors/sizes.
2. **No visual drift.** This system mirrors the marketing site. Changes that alter
   the brand look need design sign-off and a matching update to
   `DESIGN_SYSTEM_AUDIT.md`.
3. **Framework-agnostic.** Ship CSS + tokens, not framework components.
4. **Every component gets a story.** If you add or change a component, update its
   story under `stories/`.
5. **Accessibility is non-negotiable.** Respect `prefers-reduced-motion`, keep
   focus states, and check the a11y addon panel.

## Local development

```bash
npm install
npm run storybook        # http://localhost:6006
npm run build-storybook  # static build into ./storybook-static
```

## Adding a component

1. Create `src/components/<name>.css`, consuming tokens.
2. Add an `@import` for it in `src/styles/index.css`.
3. Add `stories/components/<Name>.stories.js`.
4. Add a row to the component inventory in `DESIGN_SYSTEM_AUDIT.md`.

## Commit convention

This repo uses [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(components): add toast component
fix(form): correct checkbox focus ring offset
docs(audit): document danger token
chore: bump storybook
```

Common types: `feat`, `fix`, `docs`, `chore`, `refactor`, `style`, `test`.

## Releasing

1. Update `version` in `package.json`.
2. Update the audit if tokens/components changed.
3. Tag: `git tag vX.Y.Z && git push --tags`.
