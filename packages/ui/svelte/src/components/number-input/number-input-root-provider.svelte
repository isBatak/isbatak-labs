<script module lang="ts">
  import { NumberInput } from "@ark-ui/svelte/number-input"
  import { numberInput, type NumberInputVariantProps } from "@isbatak/panda-ds/recipes"

  export type NumberInputRootProviderProps = NumberInput.RootProviderProps & NumberInputVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideNumberInputStyles } from "./number-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NumberInputRootProviderProps = $props()
  const [variantProps, localProps] = $derived(numberInput.splitVariantProps(props))
  const styles = $derived(numberInput(variantProps))
  provideNumberInputStyles(() => styles)
</script>

<NumberInput.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
