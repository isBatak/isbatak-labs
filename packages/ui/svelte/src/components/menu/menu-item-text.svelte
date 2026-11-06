<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuItemTextProps = Menu.ItemTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: MenuItemTextProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.ItemText bind:ref {...props} data-slot="itemText" class={[!unstyled && styles().itemText, className]} />
