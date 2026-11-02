---
"@isbatak/panda-ds": patch
"@isbatak/react-ui": minor
"@isbatak/solid-ui": minor
"@isbatak/vue-ui": minor
"@isbatak/svelte-ui": minor
---

Add `Kbd` and `KbdGroup`. `KbdGroup` passes its `size` and `variant` to every `Kbd` inside. The `kbd` recipe now centers
its content and has a minimum width per size, so single keys stay square.
