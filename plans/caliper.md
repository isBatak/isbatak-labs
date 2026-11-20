# Caliper (was `@isbatak/spec`)

Draw specs over live UI. Renamed from Spec and split like text-flip.

## Packages

| Package                  | Path                     | Holds                                                                            |
| ------------------------ | ------------------------ | -------------------------------------------------------------------------------- |
| `@isbatak/zag-caliper`   | `packages/zag/caliper`   | Anatomy (zag 2 `data-caliper-<part>` attrs), `spanStyle`, `connect(normalize)`   |
| `@isbatak/ark-caliper`   | `packages/ark/caliper`   | Headless React parts on `ark.*`: `render` prop, deprecated `asChild`, part state |
| `@isbatak/panda-caliper` | `packages/panda/caliper` | Slot recipe + preset                                                             |

## Decisions

- No `data-scope`/`data-part`. Attributes come from the anatomy, never hard-coded.
- Options (`placement`, `extension`, `line`, `distance`, `ticks`, `kind`, `magnify`) stay data attributes; the recipe
  base keys on them, so the recipe has no variants and the binding needs no runtime.
- No binding in the packages. A published package can't produce Panda style props; only the app's `styled-system` can.
  Apps bind the Ark parts with `createSlotRecipeContext(caliper)`, like text-flip, and get `colorPalette` and every
  style prop natively. www's binding is `apps/www/components/ui/caliper`.
- Rejected: a `/react` binding with hard-coded `caliper__<slot>` classes and a `palette` prop that set palette vars
  inline. It duplicated `colorPalette`, hard-coded panda-ds palette keys and broke with `prefix` or `hash`.
- React only for now. Solid, Vue and Svelte can follow the text-flip layout.

## Todo

- [x] zag, ark, panda packages; delete `packages/tools/spec`
- [x] www: config, deps, demos, blog figures, docs page at `/tools/caliper`
- [x] Logo and wordmark
- [x] Changeset, typecheck, oxlint, check the page renders
