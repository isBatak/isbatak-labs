<script module lang="ts">
  import { Select } from "@ark-ui/svelte/select"

  export type SelectContentProps = Select.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSelectAlignItemWithTrigger, useSelectStyles } from "./select-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SelectContentProps = $props()
  const styles = useSelectStyles()
  const alignItemWithTrigger = useSelectAlignItemWithTrigger()
</script>

<Select.Content
  bind:ref
  data-align-item-with-trigger={alignItemWithTrigger() ? "" : undefined}
  {...props}
  data-slot="content"
  class={[!unstyled && styles().content, className]}
/>
