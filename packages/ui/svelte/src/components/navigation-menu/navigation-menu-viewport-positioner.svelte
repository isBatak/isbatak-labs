<script module lang="ts">
  import { NavigationMenu } from "@ark-ui/svelte/navigation-menu"

  export type NavigationMenuViewportPositionerProps = NavigationMenu.ViewportPositionerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNavigationMenuStyles } from "./navigation-menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NavigationMenuViewportPositionerProps = $props()
  const styles = useNavigationMenuStyles()
</script>

<NavigationMenu.ViewportPositioner
  bind:ref
  {...props}
  data-slot="viewportPositioner"
  class={[!unstyled && styles().viewportPositioner, className]}
/>
