<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type ComboboxItemProps = Combobox.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useComboboxStyles } from "./combobox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ComboboxItemProps = $props()
  const styles = useComboboxStyles()
</script>

<Combobox.Item bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
