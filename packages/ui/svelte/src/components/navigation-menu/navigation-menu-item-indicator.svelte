<script module lang="ts">
  import { NavigationMenu } from "@ark-ui/svelte/navigation-menu"

  export type NavigationMenuItemIndicatorProps = NavigationMenu.ItemIndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNavigationMenuStyles } from "./navigation-menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NavigationMenuItemIndicatorProps = $props()
  const styles = useNavigationMenuStyles()
</script>

<NavigationMenu.ItemIndicator
  bind:ref
  {...props}
  data-slot="itemIndicator"
  class={[!unstyled && styles().itemIndicator, className]}
/>
