<script module lang="ts">
  import { NavigationMenu } from "@ark-ui/svelte/navigation-menu"

  export type NavigationMenuTriggerProps = NavigationMenu.TriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNavigationMenuStyles } from "./navigation-menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NavigationMenuTriggerProps = $props()
  const styles = useNavigationMenuStyles()
</script>

<NavigationMenu.Trigger
  bind:ref
  {...props}
  data-slot="trigger"
  class={[!unstyled && styles().trigger, className]}
/>
