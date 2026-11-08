<script module lang="ts">
  import { Drawer } from "@ark-ui/svelte/drawer"

  export type DrawerPositionerProps = Drawer.PositionerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDrawerStyles } from "./drawer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DrawerPositionerProps = $props()
  const styles = useDrawerStyles()
</script>

<Drawer.Positioner bind:ref {...props} data-slot="positioner" class={[!unstyled && styles().positioner, className]} />
