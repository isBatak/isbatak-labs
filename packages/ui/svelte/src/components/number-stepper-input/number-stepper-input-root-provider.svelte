<script module lang="ts">
  import { NumberInput } from "@ark-ui/svelte/number-input"
  import { numberStepperInput, type NumberStepperInputVariantProps } from "@isbatak/panda-ds/recipes"

  export type NumberStepperInputRootProviderProps = NumberInput.RootProviderProps & NumberStepperInputVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideNumberStepperInputStyles } from "./number-stepper-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NumberStepperInputRootProviderProps = $props()
  const [variantProps, localProps] = $derived(numberStepperInput.splitVariantProps(props))
  const styles = $derived(numberStepperInput(variantProps))
  provideNumberStepperInputStyles(() => styles)
</script>

<NumberInput.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
