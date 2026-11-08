<script module lang="ts">
  import { Listbox } from "@ark-ui/svelte/listbox"

  export type ListboxItemIndicatorProps = Listbox.ItemIndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useListboxStyles } from "./listbox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ListboxItemIndicatorProps = $props()
  const styles = useListboxStyles()
</script>

<Listbox.ItemIndicator bind:ref {...props} data-slot="itemIndicator" class={[!unstyled && styles().itemIndicator, className]} />
