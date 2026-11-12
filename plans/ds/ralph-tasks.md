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
- [ ] card — has: recipe.
- [ ] data-list — has: recipe.
- [ ] stat — has: recipe.
- [ ] table — has: recipe, react, docs. Audit react; add vue, svelte, solid.
- [ ] grid-table — has: recipe, react, docs. Audit react; add vue, svelte, solid.
- [ ] timeline — has: recipe.
- [ ] qr-code — has: recipe. Ark QR Code.
- [ ] image — nothing yet. Chakra's Image: a styled `img` with `fit`, `htmlWidth`/`htmlHeight`, aspect ratio.
- [ ] marquee — has: recipe. Ark Marquee if available, else a CSS-only component.
- [ ] empty-state — has: recipe. Category `Feedback`.
- [ ] format — nothing yet. Ark Format (`Format.Number`, `Format.Byte`, `Format.RelativeTime`). No recipe.
- [ ] locale — nothing yet. Ark `LocaleProvider` and `useLocale`. No recipe; docs page only, no stories beyond the demo.

## Feedback

Category `Feedback`.

- [ ] alert — has: recipe.
- [ ] progress — has: recipe. Ark Progress (linear).
- [ ] progress-circle — has: recipe. Ark Progress (circular).
- [ ] skeleton — has: recipe.
- [ ] spinner — has: recipe, all four frameworks, docs. Audit: tl-ds look, Chakra's examples, stories.
- [ ] loader — has: all four frameworks, docs. Audit: Chakra's examples, stories.
- [ ] status — has: recipe.

## tl-ds extras

Only in tl-ds; port its API and look. Pick the docs category that fits.

- [ ] beacon
- [ ] ripple
- [ ] bottom-nav-bar
- [ ] sidebar
- [ ] action-item
- [ ] tone

## Ark-only

Ark components Chakra doesn't have; follow Ark's examples for demos.

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
