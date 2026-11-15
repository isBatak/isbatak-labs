<script module lang="ts">
  import { SignaturePad } from "@ark-ui/svelte/signature-pad"
  import { signaturePad, type SignaturePadVariantProps } from "@isbatak/panda-ds/recipes"

  export type SignaturePadRootProps = SignaturePad.RootProps & SignaturePadVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideSignaturePadStyles } from "./signature-pad-styles"

  let { ref = $bindable(null), paths = $bindable(), unstyled, class: className, ...props }: SignaturePadRootProps = $props()
  const [variantProps, localProps] = $derived(signaturePad.splitVariantProps(props))
  const styles = $derived(signaturePad(variantProps))
  provideSignaturePadStyles(() => styles)
</script>

<SignaturePad.Root bind:ref bind:paths {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
