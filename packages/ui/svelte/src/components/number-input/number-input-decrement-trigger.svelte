<script module lang="ts">
  import { NumberInput } from "@ark-ui/svelte/number-input"

  export type NumberInputDecrementTriggerProps = NumberInput.DecrementTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNumberInputStyles } from "./number-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NumberInputDecrementTriggerProps = $props()
  const styles = useNumberInputStyles()
</script>

<NumberInput.DecrementTrigger bind:ref {...props} data-slot="decrementTrigger" class={[!unstyled && styles().decrementTrigger, className]} />
