<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type ComboboxItemIndicatorProps = Combobox.ItemIndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useComboboxStyles } from "./combobox-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: ComboboxItemIndicatorProps = $props()
  const styles = useComboboxStyles()
</script>

<Combobox.ItemIndicator bind:ref {...props} data-slot="itemIndicator" class={[!unstyled && styles().itemIndicator, className]}>
  {#if children}{@render children()}{:else}<Icon name="check" />{/if}
</Combobox.ItemIndicator>
