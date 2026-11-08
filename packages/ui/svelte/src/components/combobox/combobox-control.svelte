<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type ComboboxControlProps = Combobox.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useComboboxStyles } from "./combobox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ComboboxControlProps = $props()
  const styles = useComboboxStyles()
</script>

<Combobox.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
