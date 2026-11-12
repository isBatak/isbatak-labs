<script module lang="ts">
  import { QrCode } from "@ark-ui/svelte/qr-code"

  export type QrCodeFrameProps = QrCode.FrameProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useQrCodeStyles } from "./qr-code-styles"
  import QrCodePattern from "./qr-code-pattern.svelte"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: QrCodeFrameProps = $props()
  const styles = useQrCodeStyles()
</script>

<QrCode.Frame bind:ref {...props} data-slot="frame" class={[!unstyled && styles().frame, className]}>
  {#if children}
    {@render children()}
  {:else}
    <QrCodePattern />
  {/if}
</QrCode.Frame>
