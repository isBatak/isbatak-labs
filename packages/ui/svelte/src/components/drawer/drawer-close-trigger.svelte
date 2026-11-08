<script module lang="ts">
  import { Drawer } from "@ark-ui/svelte/drawer"

  export type DrawerCloseTriggerProps = Drawer.CloseTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDrawerStyles } from "./drawer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DrawerCloseTriggerProps = $props()
  const styles = useDrawerStyles()
</script>

<Drawer.CloseTrigger bind:ref {...props} data-slot="closeTrigger" class={[!unstyled && styles().closeTrigger, className]} />
