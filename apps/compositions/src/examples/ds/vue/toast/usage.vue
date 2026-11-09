<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"

import { createToaster, Toaster } from "@isbatak/vue-ui/toast"

const toaster = createToaster({ placement: "bottom-end", overlap: true, gap: 16 })

const showToast = () => toaster.create({ title: "File saved", description: "Your changes are saved to the cloud." })
</script>

<template>
  <Button variant="outline" @click="showToast">Show toast</Button>
  <Teleport to="body">
    <Toaster :toaster="toaster" />
  </Teleport>
</template>
