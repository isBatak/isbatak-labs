<script module lang="ts">
  import { NavigationMenu } from "@ark-ui/svelte/navigation-menu"

  export type NavigationMenuItemProps = NavigationMenu.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNavigationMenuStyles } from "./navigation-menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NavigationMenuItemProps = $props()
  const styles = useNavigationMenuStyles()
</script>

<NavigationMenu.Item
  bind:ref
  {...props}
  data-slot="item"
  class={[!unstyled && styles().item, className]}
/>
