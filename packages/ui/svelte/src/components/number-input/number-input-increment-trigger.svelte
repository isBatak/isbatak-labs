<script module lang="ts">
  import { NumberInput } from "@ark-ui/svelte/number-input"

  export type NumberInputIncrementTriggerProps = NumberInput.IncrementTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNumberInputStyles } from "./number-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NumberInputIncrementTriggerProps = $props()
  const styles = useNumberInputStyles()
</script>

<NumberInput.IncrementTrigger bind:ref {...props} data-slot="incrementTrigger" class={[!unstyled && styles().incrementTrigger, className]} />
