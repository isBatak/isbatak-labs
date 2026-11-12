<script module lang="ts">
  import { QrCode } from "@ark-ui/svelte/qr-code"

  export type QrCodePatternProps = QrCode.PatternProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useQrCodeStyles } from "./qr-code-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: QrCodePatternProps = $props()
  const styles = useQrCodeStyles()
</script>

<QrCode.Pattern bind:ref {...props} data-slot="pattern" class={[!unstyled && styles().pattern, className]} />
