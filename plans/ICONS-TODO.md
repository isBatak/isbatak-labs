# Icons TODO

1. [x] Fix the ikona `icons.ts` template to use `import type`, then drop the patch in the icons generate script.
1. [x] Render the Solid, Svelte and Vue `Icon` in their storybooks to check they work.
1. [x] Move www from its Tabler sprite to `@isbatak/icons`, with the icons Boring lacks added to the library.
1. [x] Fix the studio button states test: `iconStart` and `iconEnd` style descendants, so they're no longer listed as
       states.
1. [x] Fix the www lint errors for `sizes.header`, `sizes.subnav` and `colors.code.*`: lint www against its own Panda
       config.
1. [x] Add icons docs to the www ds docs (`/ds/icons`)
   1. [x] Explain how to install and use `@isbatak/icons` and the `Icon` component.
   1. [x] Let users bring their own ikona sprite: `setIconSprite()` points every `Icon` at it, and augmenting
          `IconRegistry` swaps the `name` type for their generated `IconName`. `IconSpritePreload` preloads either
          sprite.
   1. [x] Explain how to replace the library icons with your own (all or nothing).
1. [x] Check why Svelte has no Panda `styled` helpers and whether we can add them. See
       [SVELTE-STYLED.md](./SVELTE-STYLED.md).
   1. [x] Add `Box` to `@isbatak/svelte-ui`: style props, conditions and the `css` prop on any tag through `as`.
1. [x] Create a Claude Code plugin, like the [Hugeicons plugin for Codex](https://lnkd.in/p/dVXSz2vN), that helps agents
       find icon names and use them with the `Icon` component.
1. [ ] Add a Boring Icons promo page to the main www navigation that shows the icon set and promotes its author.
1. [x] Add boring icon skill for creating new icons in the same style
   1. [x] document skill on www icons docs
1. [ ] Make a promo content adn post on social media
