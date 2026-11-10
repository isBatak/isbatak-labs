<script module lang="ts">
  import { NavigationMenu } from "@ark-ui/svelte/navigation-menu"

  export type NavigationMenuContentProps = NavigationMenu.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNavigationMenuStyles } from "./navigation-menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NavigationMenuContentProps = $props()
  const styles = useNavigationMenuStyles()
</script>

<NavigationMenu.Content
  bind:ref
  {...props}
  data-slot="content"
  class={[!unstyled && styles().content, className]}
/>
