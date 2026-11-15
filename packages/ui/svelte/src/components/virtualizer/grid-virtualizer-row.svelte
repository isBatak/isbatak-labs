<script module lang="ts">
  import { GridVirtualizer } from "@ark-ui/svelte/virtualizer"

  export type GridVirtualizerRowProps = GridVirtualizer.RowProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useVirtualizerStyles } from "./virtualizer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: GridVirtualizerRowProps = $props()
  const styles = useVirtualizerStyles()
</script>

<GridVirtualizer.Row bind:ref {...props} data-slot="row" class={[!unstyled && styles().row, className]} />
