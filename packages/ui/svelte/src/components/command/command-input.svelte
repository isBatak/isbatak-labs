<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type CommandInputProps = Combobox.InputProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { getCommandProvider, useCommandContext, useCommandStyles } from "./command-context"
  import { handleCommandInputKeyDown } from "./command-store"

  let { ref = $bindable(null), unstyled, class: className, onkeydown, ...props }: CommandInputProps = $props()
  const styles = useCommandStyles()
  const context = useCommandContext()
  const provider = getCommandProvider()
</script>

<Combobox.Input
  bind:ref
  aria-labelledby={provider?.labelId}
  {...props}
  onkeydown={(event) => {
    onkeydown?.(event)
    const combobox = context.combobox()
    handleCommandInputKeyDown(event, {
      command: context.command,
      highlightedValue: combobox.highlightedValue,
      firstValue: combobox.collection.firstValue,
      selectItem: (item, modifiers) => context.selectItem(item, { modifiers }),
    })
  }}
  data-slot="input"
  class={[!unstyled && styles().input, className]}
/>
