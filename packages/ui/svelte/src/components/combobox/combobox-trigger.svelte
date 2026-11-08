<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type ComboboxTriggerProps = Combobox.TriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useComboboxStyles } from "./combobox-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: ComboboxTriggerProps = $props()
  const styles = useComboboxStyles()
</script>

<Combobox.Trigger bind:ref {...props} data-slot="trigger" class={[!unstyled && styles().trigger, className]}>
  {#if children}{@render children()}{:else}<Icon name="chevron-down" />{/if}
</Combobox.Trigger>
