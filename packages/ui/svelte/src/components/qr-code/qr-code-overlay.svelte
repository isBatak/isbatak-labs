<script module lang="ts">
  import { QrCode } from "@ark-ui/svelte/qr-code"

  export type QrCodeOverlayProps = QrCode.OverlayProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useQrCodeStyles } from "./qr-code-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: QrCodeOverlayProps = $props()
  const styles = useQrCodeStyles()
</script>

<QrCode.Overlay bind:ref {...props} data-slot="overlay" class={[!unstyled && styles().overlay, className]} />
