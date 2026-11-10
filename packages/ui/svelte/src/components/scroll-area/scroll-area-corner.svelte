<script module lang="ts">
  import { ScrollArea } from "@ark-ui/svelte/scroll-area"

  export type ScrollAreaCornerProps = ScrollArea.CornerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useScrollAreaStyles } from "./scroll-area-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ScrollAreaCornerProps = $props()
  const styles = useScrollAreaStyles()
</script>

<ScrollArea.Corner bind:ref {...props} data-slot="corner" class={[!unstyled && styles().corner, className]} />
