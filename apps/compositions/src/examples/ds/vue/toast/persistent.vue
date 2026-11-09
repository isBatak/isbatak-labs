<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"

import { createToaster, Toaster } from "@isbatak/vue-ui/toast"

const toaster = createToaster({ placement: "bottom-end", overlap: true, gap: 16 })

const showToast = () =>
  toaster.create({
    type: "info",
    title: "Stays until closed",
    description: "Close it with the button.",
    duration: Infinity,
  })
</script>

<template>
  <Button variant="outline" @click="showToast">Show persistent toast</Button>
  <Teleport to="body">
    <Toaster :toaster="toaster" />
  </Teleport>
</template>
