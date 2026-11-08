<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { FileUpload } from "@isbatak/vue-ui/file-upload"
import { Icon } from "@isbatak/vue-ui/icon"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <FileUpload.Root maxW="sm">
    <FileUpload.HiddenInput />
    <FileUpload.Label>Resume</FileUpload.Label>
    <HStack gap="2" width="full">
      <FileUpload.Trigger :asChild="true">
        <Button variant="outline" flex="1" justifyContent="flex-start">
          <Icon name="paperclip" />
          <FileUpload.FileText fallback="Select a PDF" />
        </Button>
      </FileUpload.Trigger>
      <FileUpload.ClearTrigger :asChild="true">
        <Button variant="ghost"> Clear </Button>
      </FileUpload.ClearTrigger>
    </HStack>
  </FileUpload.Root>
</template>
