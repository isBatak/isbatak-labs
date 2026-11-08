<script module lang="ts">
  import { Drawer } from "@ark-ui/svelte/drawer"

  export type DrawerBackdropProps = Drawer.BackdropProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDrawerStyles } from "./drawer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DrawerBackdropProps = $props()
  const styles = useDrawerStyles()
</script>

<Drawer.Backdrop bind:ref {...props} data-slot="backdrop" class={[!unstyled && styles().backdrop, className]} />
