<script module lang="ts">
  import { QrCode } from "@ark-ui/svelte/qr-code"
  import { qrCode, type QrCodeVariantProps } from "@isbatak/panda-ds/recipes"

  export type QrCodeRootProviderProps = QrCode.RootProviderProps & QrCodeVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideQrCodeStyles } from "./qr-code-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: QrCodeRootProviderProps = $props()
  const [variantProps, localProps] = $derived(qrCode.splitVariantProps(props))
  const styles = $derived(qrCode(variantProps))
  provideQrCodeStyles(() => styles)
</script>

<QrCode.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
