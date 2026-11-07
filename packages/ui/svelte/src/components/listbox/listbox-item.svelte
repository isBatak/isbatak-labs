<script module lang="ts">
  import { Listbox } from "@ark-ui/svelte/listbox"

  export type ListboxItemProps = Listbox.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useListboxStyles } from "./listbox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ListboxItemProps = $props()
  const styles = useListboxStyles()
</script>

<Listbox.Item bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
