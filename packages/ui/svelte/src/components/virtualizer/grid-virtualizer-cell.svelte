<script module lang="ts">
  import { GridVirtualizer } from "@ark-ui/svelte/virtualizer"

  export type GridVirtualizerCellProps = GridVirtualizer.CellProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useVirtualizerStyles } from "./virtualizer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: GridVirtualizerCellProps = $props()
  const styles = useVirtualizerStyles()
</script>

<GridVirtualizer.Cell bind:ref {...props} data-slot="cell" class={[!unstyled && styles().cell, className]} />
