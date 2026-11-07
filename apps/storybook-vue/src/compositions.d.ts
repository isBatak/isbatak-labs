declare module "*.vue" {
  import type { DefineComponent } from "vue"

  const component: DefineComponent<Record<string, any>>
  export default component
}

declare module "@isbatak/compositions/ds/vue/*" {
  import type { DefineComponent } from "vue"

  const component: DefineComponent<Record<string, any>>
  export default component
}
