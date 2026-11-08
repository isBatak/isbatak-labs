<script module lang="ts">
  import { Drawer } from "@ark-ui/svelte/drawer"

  export type DrawerTriggerProps = Drawer.TriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDrawerStyles } from "./drawer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DrawerTriggerProps = $props()
  const styles = useDrawerStyles()
</script>

<Drawer.Trigger bind:ref {...props} data-slot="trigger" class={[!unstyled && styles().trigger, className]} />
