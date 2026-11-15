<script module lang="ts">
  import { SignaturePad } from "@ark-ui/svelte/signature-pad"
  import { signaturePad, type SignaturePadVariantProps } from "@isbatak/panda-ds/recipes"

  export type SignaturePadRootProviderProps = SignaturePad.RootProviderProps &
    SignaturePadVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideSignaturePadStyles } from "./signature-pad-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SignaturePadRootProviderProps = $props()
  const [variantProps, localProps] = $derived(signaturePad.splitVariantProps(props))
  const styles = $derived(signaturePad(variantProps))
  provideSignaturePadStyles(() => styles)
</script>

<SignaturePad.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
