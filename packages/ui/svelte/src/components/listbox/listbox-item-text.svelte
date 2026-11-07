<script module lang="ts">
  import { Listbox } from "@ark-ui/svelte/listbox"

  export type ListboxItemTextProps = Listbox.ItemTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useListboxStyles } from "./listbox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ListboxItemTextProps = $props()
  const styles = useListboxStyles()
</script>

<Listbox.ItemText bind:ref {...props} data-slot="itemText" class={[!unstyled && styles().itemText, className]} />
