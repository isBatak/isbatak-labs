# PRD: design-system components

Implement each component below in `@isbatak/panda-ds` and the React, Vue, Svelte and Solid UI packages, combining Chakra
UI's component with tl-ds's modifications (`/Users/ivicabatinic/Documents/projects/tl-ds/packages/ds/src/components`).
One component per iteration, one commit per component. Work top to bottom: pick the first unticked item that isn't
marked blocked in `plans/progress.txt`. Tick it here when done.

## Disclosure and navigation

- [x] skip-nav — has: recipe (`skip-nav-link`). No Ark machine: a link plus a content target. Category `Navigation`.
- [x] scroll-area — has: recipe. Ark Scroll Area. Category `Layout`.
- [x] carousel — has: recipe. Ark Carousel. Prev/next triggers default to chevron icons. Category `Data Display`.
- [x] tree-view — has: recipe. Ark Tree View. Branch indicator defaults to a chevron. Category `Collections`.

## Data display

Category `Data Display` unless noted.

- [x] avatar — has: recipe. Ark Avatar. Fallback shows initials from `name`, else a user icon.
- [x] badge — has: recipe, all four frameworks, docs. Audit: tl-ds look, Chakra's examples, stories.
- [x] tag — has: recipe. Close trigger defaults to `CloseButton`.
- [x] card — has: recipe.
- [x] data-list — has: recipe.
- [x] stat — has: recipe.
- [x] table — has: recipe, react, docs. Audit react; add vue, svelte, solid.
- [x] grid-table — has: recipe, react, docs. Audit react; add vue, svelte, solid.
- [x] timeline — has: recipe.
- [x] qr-code — has: recipe. Ark QR Code.
- [x] image — nothing yet. Chakra's Image: a styled `img` with `fit`, `htmlWidth`/`htmlHeight`, aspect ratio.
- [ ] marquee — has: recipe. Ark Marquee. Compare the recipe with Ark's `marquee.module.css` (see "Ark and Zag example
      CSS").
- [ ] empty-state — has: recipe. Category `Feedback`.
- [ ] format — no recipe, no tl-ds version. Ark Format: `Format.Number`, `Format.Byte`, `Format.RelativeTime`. One demo
      per part, docs page, no recipe.
- [ ] locale — no recipe. tl-ds re-exports `LocaleProvider`, `useLocaleContext` and `useFilter` from Ark's locale
      module; do the same in every framework. One demo, a short docs page, no stories beyond the demo.

## Feedback

Category `Feedback`. tl-ds has all of these, so take its look.

- [ ] alert — has: recipe.
- [ ] progress — has: recipe. Ark Progress (linear). Compare with Ark's `progress.module.css`.
- [ ] progress-circle — has: recipe. It is Ark's Progress with the circular parts (`Progress.Circle`, `CircleTrack`,
      `CircleRange`), not a separate Ark component. Compare with `progress-circular.module.css`.
- [ ] skeleton — has: recipe.
- [ ] spinner — has: recipe, all four frameworks, docs. Audit: tl-ds look, Chakra's examples, stories.
- [ ] loader — has: all four frameworks, docs. Audit: Chakra's examples, stories.
- [ ] status — has: recipe.

## tl-ds extras

Only in tl-ds, in `/Users/ivicabatinic/Documents/projects/tl-ds/packages/ds/src/components/<name>`. Port its API and
look, and its stories as demos. Pick the docs category that fits.

- [ ] beacon — 60 lines, no recipe here. A pulsing dot.
- [ ] action-item — 125 lines, 4 parts.
- [ ] ripple — 204 lines.
- [ ] swap — has an Ark Swap. tl-ds has it too: take tl-ds's look and Ark's `swap.module.css` for the states.
- [ ] bottom-nav-bar — 266 lines, parts Root, Item, ItemIcon, ItemLabel. Items take a link element; mark the active item
      with `aria-current="page"` and style that, rather than depending on a router.
- [ ] sidebar — 653 lines, about 20 parts (Root, NavItem and its start/end/text parts, Section, SectionTitle,
      SectionContent, Separator, MenuItem with title and description). The nav item takes a link element and marks the
      active one with `aria-current="page"`. The biggest port: build it in the order Root, NavItem, Section, MenuItem.
- [ ] tone — the profit/loss indicator, with its `detectTone` helper and the spec `detect-tone.node.spec.ts`. Port the
      helper and its tests too, and run them.

## Ark-only

Ark components with no Chakra or tl-ds version. Design each recipe yourself, starting from Ark's example CSS (next
section). Full depth: all four frameworks, every Ark example as a demo, stories and docs, as for every other component.

- [ ] toggle-group — parts Root, Item. Also borrow from `toggle` and `group`.
- [ ] angle-slider — parts Root, Control, Thumb, MarkerGroup, Marker, ValueText, Label, HiddenInput. Also borrow from
      `slider`.
- [ ] menubar — Ark has only a root; its menus are Ark Menu parts, so reuse the `menu` recipe for the content and
      `button` for the bar.
- [ ] signature-pad — parts Root, Control, Segment, Guide, ClearTrigger, Label, HiddenInput. Also borrow from `input`.
- [ ] timer — parts Root, Area, Item, Separator, Control, ActionTrigger. Also borrow from `button`.
- [ ] image-cropper — parts Root, Viewport, Image, Selection, Handle, Grid. The hardest: no existing component to borrow
      from. Budget a whole iteration for it.
- [ ] json-tree-view — parts Root, Tree, Node, KeyNode, ValueNode. Also borrow from `tree-view`.
- [ ] frame — parts Frame, Content. Ark has no CSS for it: a border and a radius on the root, otherwise unstyled. Demos
      are Ark's four: basic, inherit-styles, script, src-doc.
- [ ] virtualizer — three variants: list, grid and window, each with its own Root, Content and Item (Row and Cell for
      the grid). Build them as one component. Demos are Ark's six: list, grid, horizontal, window, dynamic-size,
      scroll-to-index.

## Ark and Zag example CSS

For the Ark-only components, and to check recipes that already exist, start from the CSS Ark ships for its own
Storybook. It lives on the `v6` branch of `chakra-ui/ark` (the installed `@ark-ui/*` is `6.0.0-next.0`, and `main` lacks
menubar and virtualizer):

```sh
gh api -H "Accept: application/vnd.github.raw" \
  "repos/chakra-ui/ark/contents/.storybook/modules/<name>.module.css?ref=v6"
```

Zag has a second copy for many components at `shared/src/css/<name>.css` in `chakra-ui/zag`. The demos come from
`packages/react/src/components/<name>/examples/*.tsx` on the same branch, with Vue, Svelte and Solid equivalents next to
them.

Translating the CSS:

- Ark's files use `--demo-*` variables, hex colours and `rem`/`px` values. Replace them with semantic tokens (`bg.*`,
  `fg.*`, `border.*`, radii `l1` to `l3`, `shadows.*`); never copy a hex or px value where a token exists. Look tokens
  up with the Panda MCP.
- Their class names (`.Root`, `.Item`, ...) map to the recipe's slots, named after the Ark part in camelCase.
- Ark's CSS targets parts by class. Here the recipe slot does that, and state selectors use the data attributes Zag sets
  on the part (`data-state`, `data-dragging`, `data-focus`, `data-disabled`...). Zag 2 no longer sets `data-scope` and
  `data-part`; parts carry `data-slot` and `data-<component>-<part>` instead, so check the rendered markup in Storybook
  before writing a selector.

When an item is done, change `- [ ]` to `- [x]` here and tick the same line in `plans/ds/README.md`.

## Definition of done (per component)

1. Recipe in `packages/panda/ds/src/theme/recipes/<name>.ts`, registered in `recipes/index.ts`. tl-ds's look where tl-ds
   has the component, otherwise Chakra's. Keep `packages/panda/themes/analog/src/recipes/<name>.ts` in sync if it
   exists. Then `pnpm --filter @isbatak/panda-ds build`.
2. Components in `packages/ui/{react,vue,svelte,solid}/src/components/<name>/` with `<name>.ts(x)`, `index.ts`,
   `namespace.ts`. Copy the patterns of an existing component of the same kind:
   - Ark-based with parts: `floating-panel`, `menu`, `popover`.
   - Parts that default their children (icons, close buttons): `floating-panel` stage/close triggers. React
     `children ??`, Vue `slots.default ? … : h(…)`, Solid `<Show fallback>`, Svelte conditional `asChild` snippet.
   - Svelte: one `.svelte` file per part plus `<name>-styles.ts` context; `bind:` props for every Ark bindable.
3. Demos in `apps/compositions/src/examples/ds/{react,vue,svelte,solid}/<name>/`: `usage` plus Chakra's examples. React
   and Solid export `<Name><Demo>Demo`, Vue and Svelte default-export. Write structure inline, never `.map` over static
   data. Svelte `use<Name>` hooks need an `id` (`$props.id()`).
4. Stories in `apps/storybook-{react,vue,svelte,solid}/src/ds/<name>.stories.*`, title `DS/<Title>`, one story per demo.
   Copy `floating-panel.stories.*` for the shape.
5. Docs `apps/www/content/components/ds/<name>/index.mdx`: frontmatter (title, description, category from the list
   above, links), intro, `## Usage` with `<Usage />` and an anatomy snippet, `## Examples` with
   `<Example id="<name>/<demo>" />`, `## Recipe` with `<RecipeVariants />` when it has variants, `## API` with
   `<Api />`.
6. `apps/www/data/ds-api.json`: back it up, run `pnpm api:generate` in `apps/www`, then restore the backup and insert
   only this component's key at its alphabetical position. Run oxfmt on it. Never commit unrelated churn in that file.
7. Changesets: `.changeset/ds-<name>.md` for `@isbatak/panda-ds` (only if the recipe changed) and
   `.changeset/ds-<name>-ui.md` for the four private `-ui` packages, in separate files.

## Checks before committing

- Do not commit until every check below has passed. If one can't run, or fails for a reason you can't fix, leave the
  component unticked, write the blocker in `plans/progress.txt` and move on; don't commit it with a "NOT run" note.
- Run what CI runs, over everything the branch changed: `pnpm turbo run build test typecheck --affected --continue`.
  Turbo's `--affected` compares against `main`, and `--continue` reports every failure instead of stopping at the first.
  This catches packages you didn't touch but that consume yours, such as `packages/studio` (its component matrices
  spread recipe variant props onto styled components, so a variant named like a Panda style prop, e.g. `ring`, breaks
  its typecheck). It regenerates `apps/www/data/ds-api.json`; restore your version afterwards with `git checkout` and
  re-insert only your own key.
- `pnpm typecheck` in `packages/panda/ds`, the four `packages/ui/*`, `apps/compositions`, the four `apps/storybook-*`,
  and `apps/www` (run `pnpm generate` there first, then restore your `ds-api.json`).
- `git ls-files -m -o --exclude-standard | grep -E "\.(ts|tsx|vue|svelte|mjs)$" | xargs pnpm exec oxlint` and the same
  list through `pnpm exec oxfmt --check` (zsh doesn't word-split variables; use xargs).
- Behaviour check in Storybook: `pnpm build` in `apps/storybook-shared` first (Storybook CSS is pre-generated), then
  `pnpm exec storybook dev -p <port> --no-open` in each `apps/storybook-<fw>` on ports 7010–7013, never 3000 or
  6006–6013. Drive it with Playwright from `node_modules/@playwright/test`. Zag 2 parts are marked `data-slot` /
  `data-<component>-<part>`, not `data-scope`/`data-part`. Stop the servers afterwards.

## Rules

- AGENTS.md applies: no code comments, tokens only, Panda MCP for token lookups, strictTokens in compositions.
- Keep existing APIs. Chakra's examples for demos, Ark's where Chakra has none.
- Judgement calls go in `plans/progress.txt` under the component, so they can be reviewed later.
- If a component is blocked (missing token, upstream bug), note it in `plans/progress.txt`, leave it unticked and move
  on to the next one.
