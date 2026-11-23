- Never `.map()` over static data to render JSX; write the structure inline instead.
- Put plans, todo lists and notes in the `plans/` folder at the root, never loose in the repo root or a package.
- Write scripts in TypeScript (`.ts` or `.mts`) and run them with plain `node`, which strips the types.
- Every image in docs, demos and stories is a public-domain painting or painter portrait from Wikimedia Commons, never a
  stock photo or placeholder service.
- Adding or changing a design-system component (recipe, framework component, demo, docs page): read
  `docs/ds-component.md` for where each file lives.

## Styling

- Style by hand with style props on the `@isbatak/react-ui` layout components (`Box`, `Flex`, `Grid`, `Stack`, `Span`,
  `Text`).
- Token, recipe, condition or utility lookup: call the Panda MCP first, loaded with ToolSearch `+panda-ds`. Use
  `+panda-<theme>` instead for `packages/panda/themes/<theme>` and the studio run against it. An app's own extras are in
  its `panda.config.ts`.
- `apps/compositions` uses `strictTokens`. Before you say you're done, run `pnpm typecheck` in every package you touched
  and `pnpm exec oxlint <files you changed>` at the root, and fix every error and Panda warning it reports. The
  pre-commit hook blocks lint errors only. `apps/www` typecheck reads generated output; run `pnpm generate` there first
  when it's missing or a package it builds changed.
