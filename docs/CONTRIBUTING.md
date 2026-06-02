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
   story in the **[creavue-storybook](https://github.com/levonsargsyan1990/creavue-storybook)** repo.
5. **Accessibility is non-negotiable.** Respect `prefers-reduced-motion`, keep
   focus states, and check the a11y addon panel (in the Storybook repo).

## Local development

This is a zero-dependency, build-free CSS package — there's nothing to compile.
Edit the files under `src/` directly.

To preview changes visually, use the Storybook repo:

```bash
# in a clone of creavue-storybook
npm install                  # pulls this package as a git dependency
npm run storybook            # http://localhost:6006
```

While iterating, point that repo's `join-the-movement-design-system` dependency at
your local checkout (e.g. `npm link` or a `file:` path) so edits show up live.

## Adding a component

1. Create `src/components/<name>.css`, consuming tokens.
2. Add an `@import` for it in `src/styles/index.css`.
3. Add a story under `stories/components/` in the **creavue-storybook** repo.
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
