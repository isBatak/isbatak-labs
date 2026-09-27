<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuItemTextProps = Menu.ItemTextProps
</script>

<script lang="ts">
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), class: className, ...props }: MenuItemTextProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.ItemText bind:ref {...props} data-slot="itemText" class={[styles().itemText, className]} />
