<script module lang="ts">
  import { NumberInput } from "@ark-ui/svelte/number-input"

  export type NumberStepperInputIncrementTriggerProps = NumberInput.IncrementTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNumberStepperInputStyles } from "./number-stepper-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NumberStepperInputIncrementTriggerProps = $props()
  const styles = useNumberStepperInputStyles()
</script>

<NumberInput.IncrementTrigger bind:ref {...props} data-slot="incrementTrigger" class={[!unstyled && styles().incrementTrigger, className]} />
