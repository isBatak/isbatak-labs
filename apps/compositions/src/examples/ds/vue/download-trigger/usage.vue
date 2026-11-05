<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { DownloadTrigger } from "@isbatak/vue-ui/download-trigger"

const data = "Remember to drink water."
</script>

<template>
  <DownloadTrigger :data="data" fileName="notes.txt" mimeType="text/plain" :asChild="true">
    <Button variant="outline">Download txt</Button>
  </DownloadTrigger>
</template>
