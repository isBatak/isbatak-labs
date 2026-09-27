<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuSeparatorProps = Menu.SeparatorProps
</script>

<script lang="ts">
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), class: className, ...props }: MenuSeparatorProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.Separator bind:ref {...props} data-slot="separator" class={[styles().separator, className]} />
