<script setup lang="ts">
import { FileUpload } from "@isbatak/vue-ui/file-upload"
import { Icon } from "@isbatak/vue-ui/icon"
import { Span } from "@isbatak/vue-ui/span"
</script>

<template>
  <FileUpload.Root :maxFiles="5" maxW="md">
    <FileUpload.HiddenInput />
    <FileUpload.Dropzone width="full">
      <Icon name="upload" size="lg" color="fg.muted" />
      <FileUpload.DropzoneContent>
        <Span>Drag and drop files here</Span>
        <Span color="fg.muted">.png, .jpg up to 5MB</Span>
      </FileUpload.DropzoneContent>
    </FileUpload.Dropzone>
    <FileUpload.List :showSize="true" :clearable="true" />
  </FileUpload.Root>
</template>
