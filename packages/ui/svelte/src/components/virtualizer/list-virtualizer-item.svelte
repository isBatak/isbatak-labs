<script module lang="ts">
  import { ListVirtualizer } from "@ark-ui/svelte/virtualizer"

  export type ListVirtualizerItemProps = ListVirtualizer.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useVirtualizerStyles } from "./virtualizer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ListVirtualizerItemProps = $props()
  const styles = useVirtualizerStyles()
</script>

<ListVirtualizer.Item bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
