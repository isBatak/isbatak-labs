<script module lang="ts">
  import { ScrollArea } from "@ark-ui/svelte/scroll-area"

  export type ScrollAreaThumbProps = ScrollArea.ThumbProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useScrollAreaStyles } from "./scroll-area-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ScrollAreaThumbProps = $props()
  const styles = useScrollAreaStyles()
</script>

<ScrollArea.Thumb bind:ref {...props} data-slot="thumb" class={[!unstyled && styles().thumb, className]} />
