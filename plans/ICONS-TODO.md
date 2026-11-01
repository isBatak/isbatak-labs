# Icons TODO

1. [x] Fix the ikona `icons.ts` template to use `import type`, then drop the patch in the icons generate script.
1. [x] Render the Solid, Svelte and Vue `Icon` in their storybooks to check they work.
1. [ ] Decide whether www moves from its Tabler sprite to `@isbatak/icons`.
1. [ ] Update the studio button states test to expect the `iconStart` and `iconEnd` states.
1. [ ] Fix the www lint errors for the missing `sizes.header`, `sizes.subnav` and `colors.code.*` tokens.
1. [ ] Add icons docs to the www ds docs
   1. [ ] Explain how to install and use `@isbatak/icons` and the `Icon` component.
   1. [ ] Add a `createIcon` util so users can build their own sprite with ikona, and let them extend the `name` prop
          with their ikona-generated `IconName` type through TypeScript module augmentation.
   1. [ ] Explain how to replace the library icons with your own by providing SVGs with the same names.
1. [ ] Check why Svelte has no Panda `styled` helpers and whether we can add them.
1. [ ] Create a Claude Code plugin, like the [Hugeicons plugin for Codex](https://lnkd.in/p/dVXSz2vN), that helps agents
       find icon names and use them with the `Icon` component.
1. [ ] Add a Boring Icons promo page to the main www navigation that shows the icon set and promotes its author.
