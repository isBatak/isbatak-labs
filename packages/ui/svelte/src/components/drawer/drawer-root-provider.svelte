<script module lang="ts">
  import { Drawer } from "@ark-ui/svelte/drawer"
  import { drawer, type DrawerVariantProps } from "@isbatak/panda-ds/recipes"

  export type DrawerRootProviderProps = Drawer.RootProviderProps & DrawerVariantProps
</script>

<script lang="ts">
  import { provideDrawerStyles } from "./drawer-styles"

  let { lazyMount = true, unmountOnExit = true, ...props }: DrawerRootProviderProps = $props()
  const [variantProps, localProps] = $derived(drawer.splitVariantProps(props))
  const styles = $derived(drawer(variantProps))
  provideDrawerStyles(() => styles)
</script>

<Drawer.RootProvider {lazyMount} {unmountOnExit} {...localProps} />
