<script module lang="ts">
  import { ScrollArea } from "@ark-ui/svelte/scroll-area"

  export type ScrollAreaViewportProps = ScrollArea.ViewportProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useScrollAreaStyles } from "./scroll-area-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ScrollAreaViewportProps = $props()
  const styles = useScrollAreaStyles()
</script>

<ScrollArea.Viewport bind:ref {...props} data-slot="viewport" class={[!unstyled && styles().viewport, className]} />
