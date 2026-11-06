<script module lang="ts">
  import { Menu } from "@ark-ui/svelte/menu"

  export type MenuPositionerProps = Menu.PositionerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useMenuStyles } from "./menu-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: MenuPositionerProps = $props()
  const styles = useMenuStyles()
</script>

<Menu.Positioner bind:ref {...props} data-slot="positioner" class={[!unstyled && styles().positioner, className]} />
