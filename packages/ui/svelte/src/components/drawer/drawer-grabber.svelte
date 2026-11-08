<script module lang="ts">
  import { Drawer } from "@ark-ui/svelte/drawer"

  export type DrawerGrabberProps = Drawer.GrabberProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDrawerStyles } from "./drawer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DrawerGrabberProps = $props()
  const styles = useDrawerStyles()
</script>

<Drawer.Grabber bind:ref {...props} data-slot="grabber" class={[!unstyled && styles().grabber, className]} />
