<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type CommandEmptyProps = Combobox.EmptyProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCommandContext, useCommandStyles } from "./command-context"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CommandEmptyProps = $props()
  const styles = useCommandStyles()
  const context = useCommandContext()
</script>

{#if !context.loading}
  <Combobox.Empty bind:ref {...props} data-slot="empty" class={[!unstyled && styles().empty, className]} />
{/if}
