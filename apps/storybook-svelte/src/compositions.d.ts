declare module "*.svelte" {
  import type { Component } from "svelte"

  const component: Component
  export default component
}

declare module "@isbatak/compositions/ds/svelte/*" {
  import type { Component } from "svelte"

  const component: Component
  export default component
}
