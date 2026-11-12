<script setup lang="ts">
import { QrCode } from "@isbatak/vue-ui/qr-code"
</script>

<template>
  <QrCode.Root value="https://isbatak.dev">
    <QrCode.Frame />
  </QrCode.Root>
</template>
