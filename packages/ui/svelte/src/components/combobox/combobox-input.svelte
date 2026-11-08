<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type ComboboxInputProps = Combobox.InputProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useComboboxStyles } from "./combobox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ComboboxInputProps = $props()
  const styles = useComboboxStyles()
</script>

<Combobox.Input bind:ref {...props} data-slot="input" class={[!unstyled && styles().input, className]} />
