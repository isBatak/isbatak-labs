<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type ComboboxLabelProps = Combobox.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useComboboxStyles } from "./combobox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ComboboxLabelProps = $props()
  const styles = useComboboxStyles()
</script>

<Combobox.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
