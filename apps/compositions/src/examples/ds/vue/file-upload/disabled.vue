<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { FileUpload } from "@isbatak/vue-ui/file-upload"
import { Icon } from "@isbatak/vue-ui/icon"
</script>

<template>
  <FileUpload.Root :disabled="true" maxW="sm">
    <FileUpload.HiddenInput />
    <FileUpload.Trigger :asChild="true">
      <Button variant="outline" size="sm"> <Icon name="upload" /> Upload file </Button>
    </FileUpload.Trigger>
  </FileUpload.Root>
</template>
