<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuItemGroupLabelProps = Menu.ItemGroupLabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: MenuItemGroupLabelProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.ItemGroupLabel bind:ref {...props} data-slot="itemGroupLabel" class={[!unstyled && styles().itemGroupLabel, className]} />
