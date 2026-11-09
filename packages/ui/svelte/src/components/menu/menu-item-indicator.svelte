<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuItemIndicatorProps = Menu.ItemIndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: MenuItemIndicatorProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.ItemIndicator bind:ref {...props} data-slot="itemIndicator" class={[!unstyled && styles().itemIndicator, className]}>
  {#if children}{@render children()}{:else}<Icon name="check" />{/if}
</Menu.ItemIndicator>
