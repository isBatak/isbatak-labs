<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type CommandItemTextProps = Combobox.ItemTextProps & {
    /**
     * The item's text, rendered when there are no children.
     */
    text?: string | undefined
    /**
     * Whether to bold the characters of `text` that match the search query.
     */
    highlight?: boolean | undefined
    unstyled?: boolean | undefined
  }
</script>

<script lang="ts">
  import { useComboboxContext } from "@ark-ui/svelte/combobox"

  import { useCommandContext, useCommandStyles } from "./command-context"
  import { getHighlightChunks } from "./command-store"

  let {
    ref = $bindable(null),
    unstyled,
    class: className,
    text,
    highlight,
    children,
    ...props
  }: CommandItemTextProps = $props()
  const styles = useCommandStyles()
  const combobox = useComboboxContext()
  const context = useCommandContext()
  const chunks = $derived(
    highlight && text != null ? getHighlightChunks(text, context.command?.filterQuery ?? combobox().inputValue) : null,
  )
</script>

<Combobox.ItemText bind:ref {...props} data-slot="itemText" class={[!unstyled && styles().itemText, className]}>
  {#if children}
    {@render children()}
  {:else if chunks}
    {#each chunks as chunk, index (index)}{#if chunk.match}<mark>{chunk.text}</mark>{:else}{chunk.text}{/if}{/each}
  {:else}
    {text}
  {/if}
</Combobox.ItemText>
