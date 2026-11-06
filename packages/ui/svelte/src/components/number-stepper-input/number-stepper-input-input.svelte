<script module lang="ts">
  import { NumberInput } from "@ark-ui/svelte/number-input"

  export type NumberStepperInputInputProps = NumberInput.InputProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNumberStepperInputStyles } from "./number-stepper-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NumberStepperInputInputProps = $props()
  const styles = useNumberStepperInputStyles()
</script>

<NumberInput.Input bind:ref {...props} data-slot="input" class={[!unstyled && styles().input, className]} />
