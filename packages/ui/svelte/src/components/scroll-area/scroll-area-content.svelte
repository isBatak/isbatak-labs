<script module lang="ts">
  import { ScrollArea } from "@ark-ui/svelte/scroll-area"

  export type ScrollAreaContentProps = ScrollArea.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useScrollAreaStyles } from "./scroll-area-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ScrollAreaContentProps = $props()
  const styles = useScrollAreaStyles()
</script>

<ScrollArea.Content bind:ref {...props} data-slot="content" class={[!unstyled && styles().content, className]} />
