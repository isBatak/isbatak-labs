<script module lang="ts">
  import { NavigationMenu } from "@ark-ui/svelte/navigation-menu"

  export type NavigationMenuViewportProps = NavigationMenu.ViewportProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNavigationMenuStyles } from "./navigation-menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NavigationMenuViewportProps = $props()
  const styles = useNavigationMenuStyles()
</script>

<NavigationMenu.Viewport
  bind:ref
  {...props}
  data-slot="viewport"
  class={[!unstyled && styles().viewport, className]}
/>
