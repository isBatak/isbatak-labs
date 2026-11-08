<script module lang="ts">
  import { Combobox, type ComboboxPositionerProps as ComboboxArkPositionerProps } from "@ark-ui/svelte/combobox"

  export type ComboboxPositionerProps = ComboboxArkPositionerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useComboboxStyles } from "./combobox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ComboboxPositionerProps = $props()
  const styles = useComboboxStyles()
</script>

<Combobox.Positioner bind:ref {...props} data-slot="positioner" class={[!unstyled && styles().positioner, className]} />
