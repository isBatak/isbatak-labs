<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type ComboboxEmptyProps = Combobox.EmptyProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useComboboxStyles } from "./combobox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ComboboxEmptyProps = $props()
  const styles = useComboboxStyles()
</script>

<Combobox.Empty bind:ref {...props} data-slot="empty" class={[!unstyled && styles().empty, className]} />
