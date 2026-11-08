<script module lang="ts">
  import { Drawer } from "@ark-ui/svelte/drawer"

  export type DrawerContentProps = Drawer.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDrawerStyles } from "./drawer-styles"

  let { ref = $bindable(null), unstyled, class: className, onpointerdown, ...props }: DrawerContentProps = $props()
  const styles = useDrawerStyles()
</script>

<Drawer.Content
  bind:ref
  {...props}
  onpointerdown={(event) => {
    onpointerdown?.(event)
    event.stopPropagation()
  }}
  data-slot="content"
  class={[!unstyled && styles().content, className]}
/>
