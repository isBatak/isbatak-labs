<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { QrCode } from "@isbatak/svelte-ui/qr-code"
</script>

<QrCode.Root value="https://isbatak.dev" encoding={{ ecc: "H" }} size="lg">
  <QrCode.Frame />
  <QrCode.Overlay>
    <Icon name="star" />
  </QrCode.Overlay>
</QrCode.Root>
