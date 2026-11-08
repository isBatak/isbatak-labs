<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type ComboboxItemTextProps = Combobox.ItemTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useComboboxStyles } from "./combobox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ComboboxItemTextProps = $props()
  const styles = useComboboxStyles()
</script>

<Combobox.ItemText bind:ref {...props} data-slot="itemText" class={[!unstyled && styles().itemText, className]} />
