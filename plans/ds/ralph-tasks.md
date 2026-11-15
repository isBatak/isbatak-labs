# PRD: design-system components

Reusable brief for `plans/ralph.sh`. Every component it listed is done; the process below applies to the next batch.

Implement each component below in `@isbatak/panda-ds` and the React, Vue, Svelte and Solid UI packages, combining Chakra
UI's component with tl-ds's modifications (`/Users/ivicabatinic/Documents/projects/tl-ds/packages/ds/src/components`).
One component per iteration, one commit per component. Work top to bottom: pick the first unticked item that isn't
marked blocked in `plans/progress.txt`. Tick it here when done.

## Tasks

None left. Add the next components here as `- [ ] <name> — <notes>` lines before starting a loop.

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
6. `apps/www/data/ds-api.json`: run `pnpm api:generate` in `apps/www`. The generator formats its output with oxfmt, so
   the diff is only this component's key. If other keys change too, note it in `plans/progress.txt`.
7. Changesets: `.changeset/ds-<name>.md` for `@isbatak/panda-ds` (only if the recipe changed) and
   `.changeset/ds-<name>-ui.md` for the four private `-ui` packages, in separate files.

## Checks before committing

- Do not commit until every check below has passed. If one can't run, or fails for a reason you can't fix, leave the
  component unticked, write the blocker in `plans/progress.txt` and move on; don't commit it with a "NOT run" note.
- Run what CI runs, over everything the branch changed: `pnpm turbo run build test typecheck --affected --continue`.
  Turbo's `--affected` compares against `main`, and `--continue` reports every failure instead of stopping at the first.
  This catches packages you didn't touch but that consume yours, such as `packages/studio` (its component matrices
  spread recipe variant props onto styled components, so a variant named like a Panda style prop, e.g. `ring`, breaks
  its typecheck).
- `pnpm typecheck` in `packages/panda/ds`, the four `packages/ui/*`, `apps/compositions`, the four `apps/storybook-*`,
  and `apps/www` (run `pnpm generate` there first).
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
