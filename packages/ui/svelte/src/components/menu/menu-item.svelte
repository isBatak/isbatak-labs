<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuItemProps = Menu.ItemProps
</script>

<script lang="ts">
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), class: className, ...props }: MenuItemProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.Item bind:ref {...props} data-slot="item" class={[styles().item, className]} />
