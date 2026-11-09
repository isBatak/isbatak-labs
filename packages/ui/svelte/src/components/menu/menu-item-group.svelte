<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuItemGroupProps = Menu.ItemGroupProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: MenuItemGroupProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.ItemGroup bind:ref {...props} data-slot="itemGroup" class={[!unstyled && styles().itemGroup, className]} />
