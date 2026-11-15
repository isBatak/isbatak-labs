# DS components

Every Chakra, Ark 6 and tl-ds component in scope is built (see `GLOSSARY.md`) for React, Vue, Svelte and Solid, with a
recipe, demos, stories and a docs page. Sources are Chakra UI and tl-ds
(`~/Documents/projects/tl-ds/packages/ds/src/components`), plus Ark 6.

## Decisions

- Scope: every Chakra and Ark 6 component, plus the tl-ds extras listed below. `number-stepper-input` is a second recipe
  for number-input.
- Out: closed and partially-closed components (separate plan later), instrument, chart, time-picker, resizer, symbol,
  freeze, labelled-by, For, Show, ClientOnly, Theme, Environment. Format-byte and format-number are covered by Ark's
  Format.
- Neither source wins. Before a category starts, `plans/ds/<category>.md` lists each component's conflicts (Chakra /
  tl-ds / current, with a recommendation). The category starts once it's annotated.
- Existing recipes and components are audited against both sources when their category comes up.
- tl-ds extras without an Ark component live in `packages/ark/<name>` (`@isbatak/ark-<name>`), with no Zag machine
  ([ADR 0002](../../docs/adr/0002-non-ark-components-without-zag.md)).
- Docs live at `/ds/components/<fw>/<name>` with a framework picker. Demos are in
  `apps/compositions/src/examples/ds/<fw>/`, rendered live in www and imported by each framework's Storybook
  ([ADR 0001](../../docs/adr/0001-ds-demos-in-compositions.md)).
- Page shape: intro, Usage, Chakra's examples, then Ark's Anatomy, API (generated from our packages' types into
  `api.json`) and Accessibility.
- A component is done end to end (recipe, 4 frameworks, demos, stories, docs) before the next starts. Done means a
  changeset, `pnpm typecheck`, oxlint, and the analog theme still compiling.

## Left

- [ ] code-block — deferred: plan it alongside code-preview.
- [ ] Closed and partially-closed components: write their plan (see "Out" above).
