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
1. [x] Clear the 46 `prefer-token` warnings, then run `oxlint --deny-warnings` in CI. Concentric demos are exempt by a
       file override, `1px` is the new `px` spacing token, values no token expresses use the `[…]` escape hatch
       (`patches/@pandacss__eslint-plugin@2.4.0.patch` makes `prefer-token` skip them), and the rest snapped to tokens.
