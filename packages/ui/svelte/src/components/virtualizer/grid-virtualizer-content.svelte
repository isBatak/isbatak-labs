<script module lang="ts">
  import { GridVirtualizer } from "@ark-ui/svelte/virtualizer"

  export type GridVirtualizerContentProps = GridVirtualizer.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useVirtualizerStyles } from "./virtualizer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: GridVirtualizerContentProps = $props()
  const styles = useVirtualizerStyles()
</script>

<GridVirtualizer.Content bind:ref {...props} data-slot="content" class={[!unstyled && styles().content, className]} />
