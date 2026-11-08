<script module lang="ts">
  import { Drawer } from "@ark-ui/svelte/drawer"

  export type DrawerTitleProps = Drawer.TitleProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDrawerStyles } from "./drawer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DrawerTitleProps = $props()
  const styles = useDrawerStyles()
</script>

<Drawer.Title bind:ref {...props} data-slot="title" class={[!unstyled && styles().title, className]} />
