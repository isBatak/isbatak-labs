<script module lang="ts">
  import { Drawer } from "@ark-ui/svelte/drawer"

  export type DrawerGrabberIndicatorProps = Drawer.GrabberIndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDrawerStyles } from "./drawer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DrawerGrabberIndicatorProps = $props()
  const styles = useDrawerStyles()
</script>

<Drawer.GrabberIndicator bind:ref {...props} data-slot="grabberIndicator" class={[!unstyled && styles().grabberIndicator, className]} />
