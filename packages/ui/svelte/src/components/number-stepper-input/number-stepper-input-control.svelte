<script module lang="ts">
  import { NumberInput } from "@ark-ui/svelte/number-input"

  export type NumberStepperInputControlProps = NumberInput.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNumberStepperInputStyles } from "./number-stepper-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NumberStepperInputControlProps = $props()
  const styles = useNumberStepperInputStyles()
</script>

<NumberInput.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
