<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type ComboboxListProps = Combobox.ListProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useComboboxStyles } from "./combobox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ComboboxListProps = $props()
  const styles = useComboboxStyles()
</script>

<Combobox.List bind:ref {...props} data-slot="list" class={[!unstyled && styles().list, className]} />
