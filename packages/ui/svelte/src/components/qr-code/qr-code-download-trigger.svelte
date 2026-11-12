<script module lang="ts">
  import { QrCode } from "@ark-ui/svelte/qr-code"

  export type QrCodeDownloadTriggerProps = QrCode.DownloadTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useQrCodeStyles } from "./qr-code-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: QrCodeDownloadTriggerProps = $props()
  const styles = useQrCodeStyles()
</script>

<QrCode.DownloadTrigger bind:ref {...props} data-slot="download-trigger" class={[!unstyled && styles().downloadTrigger, className]} />
