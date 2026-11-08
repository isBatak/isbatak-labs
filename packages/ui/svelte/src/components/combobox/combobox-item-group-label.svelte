<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type ComboboxItemGroupLabelProps = Combobox.ItemGroupLabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useComboboxStyles } from "./combobox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ComboboxItemGroupLabelProps = $props()
  const styles = useComboboxStyles()
</script>

<Combobox.ItemGroupLabel bind:ref {...props} data-slot="itemGroupLabel" class={[!unstyled && styles().itemGroupLabel, className]} />
