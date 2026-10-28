- Never `.map()` over static data to render JSX; write the structure inline instead.

## Styling

- Use the `@isbatak/panda-ds` recipes before styling an element by hand; each recipe's `description` says when to pick
  it.
- Use semantic tokens (`bg.*`, `fg.*`, `border.*`, radii `l1`–`l3`, `shadows.*`) and token values like
  `cursor: "button"`. Never write hex colors or px values where a token exists.
- If a token you need doesn't exist, stop and say so. Don't invent one.
- `apps/compositions` uses `strictTokens`. Before you say you're done, run `pnpm typecheck` in every package you touched
  and fix every error.
