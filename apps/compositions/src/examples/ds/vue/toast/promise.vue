<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"

import { createToaster, Toaster } from "@isbatak/vue-ui/toast"

const toaster = createToaster({ placement: "bottom-end", overlap: true, gap: 16 })

const upload = () =>
  toaster.promise(new Promise<void>((resolve) => setTimeout(resolve, 2000)), {
    loading: { title: "Uploading…", description: "Hold on a moment." },
    success: { title: "Uploaded", description: "Your file is ready." },
    error: { title: "Upload failed", description: "Try again later." },
  })
</script>

<template>
  <Button variant="outline" @click="upload">Upload file</Button>
  <Teleport to="body">
    <Toaster :toaster="toaster" />
  </Teleport>
</template>
