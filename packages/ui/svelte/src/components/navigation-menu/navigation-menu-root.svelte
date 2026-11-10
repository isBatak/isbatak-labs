<script module lang="ts">
  import { NavigationMenu } from "@ark-ui/svelte/navigation-menu"
  import { navigationMenu, type NavigationMenuVariantProps } from "@isbatak/panda-ds/recipes"

  export type NavigationMenuRootProps = NavigationMenu.RootProps &
    NavigationMenuVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideNavigationMenuStyles } from "./navigation-menu-styles"

  let {
    ref = $bindable(null),
    value = $bindable(),
    unstyled,
    class: className,
    ...props
  }: NavigationMenuRootProps = $props()
  const [variantProps, localProps] = $derived(navigationMenu.splitVariantProps(props))
  const styles = $derived(navigationMenu(variantProps))
  provideNavigationMenuStyles(() => styles)
</script>

<NavigationMenu.Root
  bind:ref
  bind:value
  {...localProps}
  data-slot="root"
  class={[!unstyled && styles.root, className]}
/>
