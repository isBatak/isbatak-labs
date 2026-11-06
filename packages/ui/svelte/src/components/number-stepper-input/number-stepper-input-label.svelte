<script module lang="ts">
  import { NumberInput } from "@ark-ui/svelte/number-input"

  export type NumberStepperInputLabelProps = NumberInput.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNumberStepperInputStyles } from "./number-stepper-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NumberStepperInputLabelProps = $props()
  const styles = useNumberStepperInputStyles()
</script>

<NumberInput.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
