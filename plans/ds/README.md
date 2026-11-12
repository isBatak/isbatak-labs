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

Decided in [layout.md](layout.md): every recommendation accepted.

- [x] box
- [x] flex
- [x] stack
- [x] grid
- [x] simple-grid
- [x] center
- [x] absolute-center
- [x] circle
- [x] square
- [x] container
- [x] bleed
- [x] float
- [x] float-gap
- [x] aspect-ratio
- [x] wrap
- [x] spacer
- [x] sticky
- [x] group
- [x] separator

## Typography

Decided in [typography.md](typography.md): every recommendation accepted.

- [x] text
- [x] heading
- [x] span
- [x] em
- [x] strong
- [x] code
- [ ] code-block — deferred: plan it alongside code-preview
- [x] kbd
- [x] link
- [x] link-overlay
- [x] mark
- [x] highlight
- [x] blockquote
- [x] quote
- [x] list
- [x] prose
- [x] icon
- [x] visually-hidden

## Buttons and form controls

Decided in [buttons-and-forms.md](buttons-and-forms.md). Ships in five sub-slices: buttons and toggles, choice controls,
text inputs, selects, pickers.

- [x] button
- [x] menu-button — shipped as Button `orientation="vertical"`
- [x] toggle
- [x] checkbox
- [x] checkmark
- [x] checkbox-card
- [x] radio-group
- [x] radiomark
- [x] radio-card
- [x] switch
- [x] segment-group
- [x] input
- [x] input-addon — shipped as part of input-group
- [x] input-element — shipped as part of input-group
- [x] input-group
- [x] textarea
- [x] field
- [x] fieldset
- [x] native-select
- [x] select
- [x] combobox
- [x] listbox
- [x] number-input
- [x] number-stepper-input
- [x] pin-input
- [x] password-input
- [x] search-input
- [x] tags-input
- [x] editable
- [x] slider
- [x] rating-group
- [x] color-picker
- [x] color-swatch
- [x] date-input
- [x] date-picker
- [x] file-upload
- [x] clipboard
- [x] download-trigger

## Overlays

Decided in [overlays.md](overlays.md). Ships in six sub-slices: dialog and drawer, popover/hover-card/tooltip, menu,
toast and action-bar, floating-panel and tour, then portal, presence and focus-trap.

- [x] dialog
- [x] drawer
- [x] popover
- [x] hover-card
- [x] tooltip
- [x] menu
- [x] floating-panel
- [x] toast
- [x] action-bar
- [x] tour
- [x] portal
- [x] presence
- [x] focus-trap

## Disclosure and navigation

- [x] accordion
- [x] collapsible
- [x] tabs
- [x] steps
- [x] breadcrumb
- [x] pagination
- [x] navigation-menu
- [x] toc
- [x] skip-nav — has: recipe (skip-nav-link)
- [x] splitter
- [x] scroll-area — has: recipe
- [x] carousel — has: recipe
- [x] tree-view — has: recipe

## Data display

- [x] avatar — has: recipe
- [x] badge — has: recipe react vue svelte solid docs
- [x] tag — has: recipe
- [x] card — has: recipe
- [x] data-list — has: recipe
- [x] stat — has: recipe
- [x] table — has: recipe react docs
- [x] grid-table — has: recipe react docs
- [x] timeline — has: recipe
- [x] qr-code — has: recipe
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
