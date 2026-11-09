<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"
  import { menu, type MenuVariantProps } from "@isbatak/panda-ds/recipes"

  export type MenuRootProviderProps = Menu.RootProviderProps & MenuVariantProps
</script>

<script lang="ts">
  import { provideMenuStyles } from "./menu-styles"

  let { ...props }: MenuRootProviderProps = $props()
  const [variantProps, localProps] = $derived(menu.splitVariantProps(props))
  const styles = $derived(menu(variantProps))
  provideMenuStyles(() => styles)
</script>

<Menu.RootProvider {...localProps} />
