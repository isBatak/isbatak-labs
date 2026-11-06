<script module lang="ts">
  import { NumberInput } from "@ark-ui/svelte/number-input"

  export type NumberStepperInputValueTextProps = NumberInput.ValueTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNumberStepperInputStyles } from "./number-stepper-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NumberStepperInputValueTextProps = $props()
  const styles = useNumberStepperInputStyles()
</script>

<NumberInput.ValueText bind:ref {...props} data-slot="valueText" class={[!unstyled && styles().valueText, className]} />
