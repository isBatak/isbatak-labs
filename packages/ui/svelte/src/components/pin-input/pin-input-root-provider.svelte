<script module lang="ts">
  import { PinInput } from "@ark-ui/svelte/pin-input"
  import { pinInput, type PinInputVariantProps } from "@isbatak/panda-ds/recipes"

  export type PinInputRootProviderProps = PinInput.RootProviderProps & PinInputVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { providePinInputStyles } from "./pin-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PinInputRootProviderProps = $props()
  const [variantProps, localProps] = $derived(pinInput.splitVariantProps(props))
  const styles = $derived(pinInput(variantProps))
  providePinInputStyles(() => styles)
</script>

<PinInput.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
