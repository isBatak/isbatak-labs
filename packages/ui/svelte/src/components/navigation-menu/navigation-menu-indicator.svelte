<script module lang="ts">
  import { NavigationMenu } from "@ark-ui/svelte/navigation-menu"

  export type NavigationMenuIndicatorProps = NavigationMenu.IndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNavigationMenuStyles } from "./navigation-menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NavigationMenuIndicatorProps = $props()
  const styles = useNavigationMenuStyles()
</script>

<NavigationMenu.Indicator
  bind:ref
  {...props}
  data-slot="indicator"
  class={[!unstyled && styles().indicator, className]}
/>
