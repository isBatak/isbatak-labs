<script module lang="ts">
  import { WindowVirtualizer } from "@ark-ui/svelte/virtualizer"

  export type WindowVirtualizerItemProps = WindowVirtualizer.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useVirtualizerStyles } from "./virtualizer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: WindowVirtualizerItemProps = $props()
  const styles = useVirtualizerStyles()
</script>

<WindowVirtualizer.Item bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
