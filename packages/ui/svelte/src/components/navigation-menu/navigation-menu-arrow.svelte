<script module lang="ts">
  import { NavigationMenu } from "@ark-ui/svelte/navigation-menu"

  export type NavigationMenuArrowProps = NavigationMenu.ArrowProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNavigationMenuStyles } from "./navigation-menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NavigationMenuArrowProps = $props()
  const styles = useNavigationMenuStyles()
</script>

<NavigationMenu.Arrow
  bind:ref
  {...props}
  data-slot="arrow"
  class={[!unstyled && styles().arrow, className]}
/>
