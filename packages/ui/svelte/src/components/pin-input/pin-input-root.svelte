<script module lang="ts">
  import { PinInput } from "@ark-ui/svelte/pin-input"
  import { pinInput, type PinInputVariantProps } from "@isbatak/panda-ds/recipes"

  export type PinInputRootProps = PinInput.RootProps & PinInputVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { providePinInputStyles } from "./pin-input-styles"

  let { ref = $bindable(null), value = $bindable(), unstyled, class: className, ...props }: PinInputRootProps = $props()
  const [variantProps, localProps] = $derived(pinInput.splitVariantProps(props))
  const styles = $derived(pinInput(variantProps))
  providePinInputStyles(() => styles)
</script>

<PinInput.Root bind:ref bind:value {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
