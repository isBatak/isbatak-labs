<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { QrCode } from "@isbatak/svelte-ui/qr-code"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<QrCode.Root value="https://isbatak.dev">
  <Stack align="flex-start" gap="4">
    <QrCode.Frame />
    <QrCode.DownloadTrigger fileName="qr-code.png" mimeType="image/png">
      {#snippet asChild(props)}
        <Button {...props()} variant="outline" size="xs">Download</Button>
      {/snippet}
    </QrCode.DownloadTrigger>
  </Stack>
</QrCode.Root>
