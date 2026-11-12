<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { QrCode } from "@isbatak/vue-ui/qr-code"
</script>

<template>
  <QrCode.Root value="https://isbatak.dev" :encoding="{ ecc: 'H' }" size="lg">
    <QrCode.Frame />
    <QrCode.Overlay>
      <Icon name="star" />
    </QrCode.Overlay>
  </QrCode.Root>
</template>
