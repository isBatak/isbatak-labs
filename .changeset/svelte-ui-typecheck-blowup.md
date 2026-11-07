---
"@isbatak/svelte-ui": patch
---

`Input` takes the recipe's `size` variant again instead of the HTML `size` attribute. `SimpleGrid` and `WrapItem` pass
their props on in a way TypeScript can check quickly, so `svelte-check` no longer runs for minutes and crashes in apps
that use them.
