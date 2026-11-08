<script module lang="ts">
  import { Drawer } from "@ark-ui/svelte/drawer"

  export type DrawerSwipeAreaProps = Drawer.SwipeAreaProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDrawerStyles } from "./drawer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DrawerSwipeAreaProps = $props()
  const styles = useDrawerStyles()
</script>

<Drawer.SwipeArea bind:ref {...props} data-slot="swipeArea" class={[!unstyled && styles().swipeArea, className]} />
