# @isbatak/labs

Headless widgets, a Panda CSS design system, and the UI kits, tools and site built on them.

## Map

Changing a design-system component touches several of these; [docs/ds-component.md](docs/ds-component.md) lists the
files.

`ls packages/<group>` lists what each group holds; this map says what the groups are and where paths surprise.

### Packages

- `packages/zag/<name>`: Zag state machines (`@isbatak/zag-*`). `zag/lit` is the Lit adapter for Zag.
- `packages/ark/<name>`: Ark UI style components for React, Solid, Vue and Svelte (`@isbatak/ark-*`). `packages/ark/kit`
  is not a widget: `definePrimitive` and `createParts` build a widget's React parts from a Zag machine, a `connect` or a
  hook.
- `packages/panda/ds`: the design system (`@isbatak/panda-ds`): tokens, recipes, slot recipes, conditions, utilities.
- `packages/panda/themes/analog`: a second design system on the `panda-ds` foundations.
- `packages/panda/<name>`: slot recipe and preset per widget, plus the `concentric-preset` and `grain-preset` add-ons.
- `packages/panda/turbopack`: Turbopack loader and Next.js config wrapper for Panda CSS v2.
- `packages/ui/<framework>`: components styled with `panda-ds` for `react`, `vue`, `svelte`, `solid`, `preact`, `lit`.
- `packages/ui/icons` (not `packages/icons`): Boring Icons plus extra icons as a typed SVG sprite, published as
  `@isbatak/icons`. Names are in `generated/icons.ts`; new icons go in `extra/` and `tags.json`.
- `packages/studio`: Panda Studio, a visual editor for `panda-ds` projects.
- `packages/tools/sourcery`: hold a hotkey, click an element, jump to the code that rendered it.

A widget with its own machine spans three packages under one name: Caliper is `zag/caliper` (machine, anatomy, parts),
`ark/caliper` (React bindings) and `panda/caliper` (slot recipe and motion).

### Apps

- `apps/www`: the website: docs for every package, the design system and the tools. Serves the studio at `/studio`. It
  has no `src/`: routes in `app/`, components in `components/`, MDX in `content/`, site recipes in `theme/`.
- `apps/compositions`: per-framework demos for the design system and the Ark and Zag packages, rendered in the www docs.
- `apps/promos`: Remotion promo videos, one folder per promo in `src/`.
- `apps/storybook-<framework>`: one Storybook per framework; `apps/storybook` combines them.

### Agent tooling

- `plugins/isbatak-icons`: Claude Code plugin to find `@isbatak/icons` names and draw new icons in the Boring Icons
  style:

  ```sh
  /plugin install isbatak-icons --marketplace isBatak/isbatak-labs
  ```

- `.claude/skills`: project skills (`panda-css`, `panda-css-theming`, `preview`, `promo-video`).
- `plans/`: plans and todo lists.

## Development

```sh
pnpm install
pnpm test        # run tests
pnpm typecheck   # typecheck all workspaces
pnpm lint        # oxlint
pnpm format      # oxfmt
pnpm build       # build packages
```

A pre-commit hook runs oxlint and oxfmt on staged files.

## Storybook

```sh
pnpm storybook         # start all of them; open http://localhost:6006
pnpm build:storybook   # static build in apps/storybook/storybook-static
```

## Panda Studio

Preview every component, ⌘-click any part to restyle it per variant and state, edit tokens on live foundation pages,
switch between the project's theme variants, and export the result as a Panda preset.

```sh
pnpm studio            # runs the studio against apps/www; open http://localhost:6007
pnpm studio:analog     # runs it against the analog design system
```

## License

MIT
