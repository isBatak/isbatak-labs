<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"
  import { menu, type MenuVariantProps } from "@isbatak/panda-ds/recipes"

  export type MenuRootProps = Menu.RootProps & MenuVariantProps
</script>

<script lang="ts">
  import { provideMenuStyles } from "./menu-styles"

  let { ...props }: MenuRootProps = $props()
  const [variantProps, localProps] = $derived(menu.splitVariantProps(props))
  const styles = $derived(menu(variantProps))
  provideMenuStyles(() => styles)
</script>

<Menu.Root {...localProps} />
