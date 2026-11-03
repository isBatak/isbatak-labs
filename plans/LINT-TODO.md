# Lint TODO

1. [ ] Fix the 24 type-aware lint findings, then set `"options": { "typeAware": true }` in the root `.oxlintrc.json` and
       drop `oxc.typeAware` from `.vscode/settings.json`.
   1. [ ] `no-floating-promises` (3): www `example-view.tsx` and `copy-page.tsx`, compositions `mount/svelte.ts`.
   1. [ ] `no-base-to-string` (8): studio token values (`shadow.ts`, `token-panels.tsx`, `foundations.tsx`, `card.tsx`,
          tests) and www code blocks (`code-files.tsx`, `mdx-content.tsx`).
   1. [ ] `unbound-method` (5): the four ark text-flip framework hooks and www `select/searchable.tsx`.
   1. [ ] `no-implied-eval` (4): `new Function` in www `markdown.ts` and `mdx-content.tsx`, and sourcery's transform
          tests. Decide whether these are intended.
   1. [ ] `no-misused-spread` (3): string spreads in promos `sourcery/brand/marks.ts`.
   1. [ ] `no-redundant-type-constituents` (1): studio `define-component-matrix.ts`.
1. [ ] Clear the 46 `prefer-token` warnings, then run `oxlint --deny-warnings` in CI. None has an exact token, so each
       needs a new token, an `allow` entry, or a design change.
   1. [ ] radii (10): `20px`–`64px` in www `ds-demos/concentric/*`.
   1. [ ] fontSizes (15): `11px` in studio shell and canvas, `0.8125rem` in www `code-block.tsx` and `setup-prompt.tsx`,
          `0.8em`/`0.875em`/`0.925em` in www `tools/kbd.tsx` and `docs/api-table.tsx`.
   1. [ ] spacing (19): `50%`/`60%`/`-1px` in www `catalog/thumbs.tsx` and `layout/bottom-blur.tsx`, `0.15em`/`0.3em` in
          `docs/api-table.tsx`, `1px` and `auto !important` in studio.
   1. [ ] colors (2): `#2a2a2a` in studio `layer-styles-panel.tsx` and `shadows-panel.tsx`.
