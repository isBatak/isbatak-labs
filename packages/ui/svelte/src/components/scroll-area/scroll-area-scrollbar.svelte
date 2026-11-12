<script module lang="ts">
  import { ScrollArea } from "@ark-ui/svelte/scroll-area"

  export type ScrollAreaScrollbarProps = ScrollArea.ScrollbarProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useScrollAreaStyles } from "./scroll-area-styles"
  import ScrollAreaThumb from "./scroll-area-thumb.svelte"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: ScrollAreaScrollbarProps = $props()
  const styles = useScrollAreaStyles()
</script>

<ScrollArea.Scrollbar bind:ref {...props} data-slot="scrollbar" class={[!unstyled && styles().scrollbar, className]}>
  {#if children}
    {@render children()}
  {:else}
    <ScrollAreaThumb />
  {/if}
</ScrollArea.Scrollbar>
