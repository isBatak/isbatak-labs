<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { QrCode } from "@isbatak/vue-ui/qr-code"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <QrCode.Root value="https://isbatak.dev">
    <Stack align="flex-start" gap="4">
      <QrCode.Frame />
      <QrCode.DownloadTrigger fileName="qr-code.png" mimeType="image/png" :asChild="true">
        <Button variant="outline" size="xs">Download</Button>
      </QrCode.DownloadTrigger>
    </Stack>
  </QrCode.Root>
</template>
