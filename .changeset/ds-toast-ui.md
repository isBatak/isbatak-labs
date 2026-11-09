---
"@isbatak/react-ui": minor
"@isbatak/vue-ui": minor
"@isbatak/svelte-ui": minor
"@isbatak/solid-ui": minor
---

Add Toast (`createToaster`, `Toaster` and the `Toast` parts) and Action Bar in every framework. With no children,
`Toaster` renders each toast with a type icon, title, description, action and close button.

Solid: variant props on a root, like `placement` or `size`, now restyle the parts when they change. Panda's generated
Solid slot recipe context passed the styles to its parts once; solid-ui's codegen now patches it to pass an accessor.
