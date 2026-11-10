<script module lang="ts">
  import { Collapsible } from "@ark-ui/svelte/collapsible"

  export type CollapsibleContentProps = Collapsible.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCollapsibleStyles } from "./collapsible-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CollapsibleContentProps = $props()
  const styles = useCollapsibleStyles()
</script>

<Collapsible.Content bind:ref {...props} data-slot="content" class={[!unstyled && styles().content, className]} />
