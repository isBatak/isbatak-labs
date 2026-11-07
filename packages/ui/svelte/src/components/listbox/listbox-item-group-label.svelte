<script module lang="ts">
  import { Listbox } from "@ark-ui/svelte/listbox"

  export type ListboxItemGroupLabelProps = Listbox.ItemGroupLabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useListboxStyles } from "./listbox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ListboxItemGroupLabelProps = $props()
  const styles = useListboxStyles()
</script>

<Listbox.ItemGroupLabel bind:ref {...props} data-slot="itemGroupLabel" class={[!unstyled && styles().itemGroupLabel, className]} />
