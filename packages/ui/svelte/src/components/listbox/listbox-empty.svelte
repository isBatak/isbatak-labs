<script module lang="ts">
  import { Listbox } from "@ark-ui/svelte/listbox"

  export type ListboxEmptyProps = Listbox.EmptyProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useListboxStyles } from "./listbox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ListboxEmptyProps = $props()
  const styles = useListboxStyles()
</script>

<Listbox.Empty bind:ref {...props} data-slot="empty" class={[!unstyled && styles().empty, className]} />
