<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { HStack } from "@isbatak/vue-ui/stack"
import { createToaster, Toaster } from "@isbatak/vue-ui/toast"

const toaster = createToaster({ placement: "bottom-end", overlap: true, gap: 16 })

const showSuccess = () =>
  toaster.create({ type: "success", title: "Payment received", description: "We emailed you a receipt." })
const showError = () =>
  toaster.create({ type: "error", title: "Upload failed", description: "The file is larger than 10 MB." })
const showWarning = () =>
  toaster.create({ type: "warning", title: "Storage almost full", description: "You have used 90% of your space." })
const showInfo = () => toaster.create({ type: "info", title: "New version", description: "Reload the page to update." })
</script>

<template>
  <HStack gap="3" flexWrap="wrap">
    <Button variant="outline" @click="showSuccess">Success</Button>
    <Button variant="outline" @click="showError">Error</Button>
    <Button variant="outline" @click="showWarning">Warning</Button>
    <Button variant="outline" @click="showInfo">Info</Button>
  </HStack>
  <Teleport to="body">
    <Toaster :toaster="toaster" />
  </Teleport>
</template>
