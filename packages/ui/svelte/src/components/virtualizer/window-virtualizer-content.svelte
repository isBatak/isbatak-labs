<script module lang="ts">
  import { WindowVirtualizer } from "@ark-ui/svelte/virtualizer"

  export type WindowVirtualizerContentProps = WindowVirtualizer.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useVirtualizerStyles } from "./virtualizer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: WindowVirtualizerContentProps = $props()
  const styles = useVirtualizerStyles()
</script>

<WindowVirtualizer.Content bind:ref {...props} data-slot="content" class={[!unstyled && styles().content, className]} />
