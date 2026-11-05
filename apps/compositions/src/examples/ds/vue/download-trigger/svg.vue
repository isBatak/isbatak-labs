<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { DownloadTrigger } from "@isbatak/vue-ui/download-trigger"

const data = '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><circle cx="5" cy="5" r="5" /></svg>'
</script>

<template>
  <DownloadTrigger :data="data" fileName="dot.svg" mimeType="image/svg+xml" :asChild="true">
    <Button variant="outline">Download svg</Button>
  </DownloadTrigger>
</template>
