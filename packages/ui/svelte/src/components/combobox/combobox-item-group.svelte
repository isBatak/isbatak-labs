<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type ComboboxItemGroupProps = Combobox.ItemGroupProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useComboboxStyles } from "./combobox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ComboboxItemGroupProps = $props()
  const styles = useComboboxStyles()
</script>

<Combobox.ItemGroup bind:ref {...props} data-slot="itemGroup" class={[!unstyled && styles().itemGroup, className]} />
