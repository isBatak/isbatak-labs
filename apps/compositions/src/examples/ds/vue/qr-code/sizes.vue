<script setup lang="ts">
import { QrCode } from "@isbatak/vue-ui/qr-code"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack align="flex-start" gap="4">
    <QrCode.Root value="https://isbatak.dev" size="2xs">
      <QrCode.Frame />
    </QrCode.Root>
    <QrCode.Root value="https://isbatak.dev" size="xs">
      <QrCode.Frame />
    </QrCode.Root>
    <QrCode.Root value="https://isbatak.dev" size="sm">
      <QrCode.Frame />
    </QrCode.Root>
    <QrCode.Root value="https://isbatak.dev" size="md">
      <QrCode.Frame />
    </QrCode.Root>
    <QrCode.Root value="https://isbatak.dev" size="lg">
      <QrCode.Frame />
    </QrCode.Root>
    <QrCode.Root value="https://isbatak.dev" size="xl">
      <QrCode.Frame />
    </QrCode.Root>
    <QrCode.Root value="https://isbatak.dev" size="2xl">
      <QrCode.Frame />
    </QrCode.Root>
  </Stack>
</template>
