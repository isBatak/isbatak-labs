<script module lang="ts">
  import { NavigationMenu } from "@ark-ui/svelte/navigation-menu"

  export type NavigationMenuLinkProps = NavigationMenu.LinkProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNavigationMenuStyles } from "./navigation-menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NavigationMenuLinkProps = $props()
  const styles = useNavigationMenuStyles()
</script>

<NavigationMenu.Link
  bind:ref
  {...props}
  data-slot="link"
  class={[!unstyled && styles().link, className]}
/>
