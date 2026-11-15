<script module lang="ts">
  import { ListVirtualizer } from "@ark-ui/svelte/virtualizer"

  export type ListVirtualizerContentProps = ListVirtualizer.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useVirtualizerStyles } from "./virtualizer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ListVirtualizerContentProps = $props()
  const styles = useVirtualizerStyles()
</script>

<ListVirtualizer.Content bind:ref {...props} data-slot="content" class={[!unstyled && styles().content, className]} />
