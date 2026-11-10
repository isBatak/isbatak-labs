<script module lang="ts">
  import { NavigationMenu } from "@ark-ui/svelte/navigation-menu"

  export type NavigationMenuListProps = NavigationMenu.ListProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNavigationMenuStyles } from "./navigation-menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NavigationMenuListProps = $props()
  const styles = useNavigationMenuStyles()
</script>

<NavigationMenu.List
  bind:ref
  {...props}
  data-slot="list"
  class={[!unstyled && styles().list, className]}
/>
