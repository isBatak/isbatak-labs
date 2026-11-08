<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type ComboboxClearTriggerProps = Combobox.ClearTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useComboboxStyles } from "./combobox-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: ComboboxClearTriggerProps = $props()
  const styles = useComboboxStyles()
</script>

<Combobox.ClearTrigger bind:ref aria-label="Clear comboboxion" {...props} data-slot="clearTrigger" class={[!unstyled && styles().clearTrigger, className]}>
  {#if children}{@render children()}{:else}<Icon name="close" />{/if}
</Combobox.ClearTrigger>
