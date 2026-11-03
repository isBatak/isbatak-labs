# DS components

Build every DS component (see `GLOSSARY.md`) for React, Vue, Svelte and Solid, with a recipe, demos, stories and a docs
page. Sources are Chakra UI and tl-ds (`~/Documents/projects/tl-ds/packages/ds/src/components`), plus Ark 6.

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

## Slice 0: infrastructure

Concentric, icons and code-preview demos stay in `apps/www/components/ds-demos`, React only: they document presets and
packages, not DS components. DS demos move React only, rewritten to compositions' `styled-system` under `strictTokens`;
the other frameworks' demos come with each component's audit. www's Panda scans `packages/ui/{vue,svelte,solid}` and
`apps/compositions/src/examples/ds` so mounted demos share one stylesheet.

- [x] `/ds/components/<fw>/<name>` route, framework picker, redirect from `/ds/components/<name>`
- [x] `apps/compositions/src/examples/ds/<fw>/` with manifest entries, rendered live with snippets in www
- [x] "Not available for <framework> yet" for components missing a framework
- [x] API tables generated from the React package into `data/ds-api.json`, with Vue emits; recipe variant tables
      generated
- [x] Stories in each framework's Storybook import the compositions demos
- [x] Move all existing DS pages and `ds-demos` to the new route and demo source (move only, no API audit). Tabs also
      has Vue, Svelte and Solid demos to prove the mounting
- [x] Update `docs/ds-component.md`
- [x] Vue-ui parts type their props in `.vue` templates (`codegen:prepare` plugin in its `panda.config.ts`)
- [x] Add a `0` spacing and sizes token to panda-ds

## Layout

- [ ] box — has: svelte
- [ ] flex
- [ ] stack
- [ ] grid
- [ ] simple-grid
- [ ] center
- [ ] absolute-center
- [ ] circle
- [ ] square
- [ ] container
- [ ] bleed
- [ ] float
- [ ] float-gap
- [ ] aspect-ratio
- [ ] wrap
- [ ] spacer
- [ ] sticky
- [ ] group — has: recipe react vue svelte solid docs
- [ ] separator — has: recipe

## Typography

- [ ] text
- [ ] heading — has: recipe
- [ ] span
- [ ] em
- [ ] strong
- [ ] code — has: recipe
- [ ] code-block
- [ ] kbd — has: recipe react vue svelte solid docs
- [ ] link — has: recipe
- [ ] link-overlay
- [ ] mark — has: recipe
- [ ] highlight
- [ ] blockquote — has: recipe
- [ ] quote
- [ ] list — has: recipe
- [ ] prose — has: recipe
- [ ] icon — has: recipe react vue svelte solid docs
- [ ] visually-hidden

## Buttons and form controls

- [ ] button — has: recipe react vue svelte solid docs
- [ ] menu-button
- [ ] toggle
- [ ] checkbox — has: recipe
- [ ] checkmark — has: recipe
- [ ] checkbox-card — has: recipe
- [ ] radio-group — has: recipe
- [ ] radiomark — has: recipe
- [ ] radio-card — has: recipe react vue svelte solid docs
- [ ] switch — has: recipe react docs
- [ ] segment-group — has: recipe react vue svelte solid docs
- [ ] input — has: recipe
- [ ] input-addon — has: recipe
- [ ] input-element — has: recipe
- [ ] input-group — has: react
- [ ] textarea — has: recipe
- [ ] field — has: recipe
- [ ] fieldset — has: recipe
- [ ] native-select — has: recipe
- [ ] select — has: recipe react vue svelte solid docs
- [ ] combobox — has: recipe
- [ ] listbox — has: recipe
- [ ] number-input — has: recipe
- [ ] number-stepper-input
- [ ] pin-input — has: recipe
- [ ] password-input — has: recipe react docs
- [ ] search-input — has: recipe react docs
- [ ] tags-input — has: recipe
- [ ] editable — has: recipe
- [ ] slider — has: recipe react vue svelte solid docs
- [ ] rating-group — has: recipe
- [ ] color-picker — has: recipe
- [ ] color-swatch — has: recipe
- [ ] date-input — has: recipe
- [ ] date-picker — has: recipe
- [ ] file-upload — has: recipe
- [ ] clipboard
- [ ] download-trigger

## Overlays

- [ ] dialog — has: recipe
- [ ] drawer — has: recipe react docs
- [ ] popover — has: recipe react vue svelte solid docs
- [ ] hover-card — has: recipe react vue svelte solid docs
- [ ] tooltip — has: recipe react vue svelte solid docs
- [ ] menu — has: recipe react vue svelte solid docs
- [ ] floating-panel — has: recipe
- [ ] toast — has: recipe
- [ ] action-bar — has: recipe
- [ ] tour — has: recipe react vue svelte solid docs
- [ ] portal
- [ ] presence
- [ ] focus-trap

## Disclosure and navigation

- [ ] accordion — has: recipe react vue svelte solid docs
- [ ] collapsible — has: recipe
- [ ] tabs — has: recipe react vue svelte solid docs
- [ ] steps — has: recipe
- [ ] breadcrumb — has: recipe react (React added early for the docs breadcrumb; audit, other frameworks, demos and docs
      pending)
- [ ] pagination
- [ ] navigation-menu — has: recipe react docs
- [ ] toc — has: recipe react docs
- [ ] skip-nav — has: recipe (skip-nav-link)
- [ ] splitter — has: recipe
- [ ] scroll-area — has: recipe
- [ ] carousel — has: recipe
- [ ] tree-view — has: recipe

## Data display

- [ ] avatar — has: recipe
- [ ] badge — has: recipe react vue svelte solid docs
- [ ] tag — has: recipe
- [ ] card — has: recipe
- [ ] data-list — has: recipe
- [ ] stat — has: recipe
- [ ] table — has: recipe react docs
- [ ] grid-table — has: recipe react docs
- [ ] timeline — has: recipe
- [ ] qr-code — has: recipe
- [ ] image
- [ ] marquee — has: recipe
- [ ] empty-state — has: recipe
- [ ] format
- [ ] locale

## Feedback

- [ ] alert — has: recipe
- [ ] progress — has: recipe
- [ ] progress-circle — has: recipe
- [ ] skeleton — has: recipe
- [ ] spinner — has: recipe react vue svelte solid docs
- [ ] loader — has: react vue svelte solid docs
- [ ] status — has: recipe

## tl-ds extras

- [ ] beacon
- [ ] ripple
- [ ] bottom-nav-bar
- [ ] sidebar
- [ ] action-item
- [ ] tone

## Ark-only

- [ ] swap
- [ ] toggle-group
- [ ] angle-slider
- [ ] menubar
- [ ] signature-pad
- [ ] timer
- [ ] image-cropper
- [ ] json-tree-view
- [ ] frame
- [ ] virtualizer
