<script module lang="ts">
  import { Listbox } from "@ark-ui/svelte/listbox"

  export type ListboxItemGroupProps = Listbox.ItemGroupProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useListboxStyles } from "./listbox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ListboxItemGroupProps = $props()
  const styles = useListboxStyles()
</script>

<Listbox.ItemGroup bind:ref {...props} data-slot="itemGroup" class={[!unstyled && styles().itemGroup, className]} />
