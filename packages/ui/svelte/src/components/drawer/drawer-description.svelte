<script module lang="ts">
  import { Drawer } from "@ark-ui/svelte/drawer"

  export type DrawerDescriptionProps = Drawer.DescriptionProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDrawerStyles } from "./drawer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DrawerDescriptionProps = $props()
  const styles = useDrawerStyles()
</script>

<Drawer.Description bind:ref {...props} data-slot="description" class={[!unstyled && styles().description, className]} />
