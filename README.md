# @isbatak/labs

Zag state machines developed outside [Zag](https://github.com/chakra-ui/zag) before they are contributed upstream.

## Packages

- [`@isbatak/zag-masonry`](packages/zag/masonry): masonry layout state machine
- [`@isbatak/zag-wheel-picker`](packages/zag/wheel-picker): wheel picker state machine

## Development

```sh
pnpm install
pnpm test        # run tests
pnpm typecheck   # typecheck all workspaces
pnpm lint        # oxlint
pnpm format      # oxfmt
pnpm build       # build packages
```

## Storybook

Each Zag framework adapter has its own Storybook in `apps/storybook-<framework>` (React, Vue, Svelte, Solid, Preact,
vanilla). `apps/storybook` combines them into one.

```sh
pnpm storybook         # start all of them; open http://localhost:6006
pnpm build:storybook   # static build in apps/storybook/storybook-static
```

## Panda Studio

`apps/studio` is a visual editor for the `@isbatak/panda-ds` design system: preview every component, ⌘-click any part to
restyle it per variant and state, edit tokens on live foundation pages, and export the result as a Panda preset.

```sh
pnpm studio            # open http://localhost:5173
```

## License

MIT
