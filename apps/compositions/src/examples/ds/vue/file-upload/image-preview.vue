<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { FileUpload } from "@isbatak/vue-ui/file-upload"
import { Icon } from "@isbatak/vue-ui/icon"
</script>

<template>
  <FileUpload.Root accept="image/*" :maxFiles="3" maxW="sm">
    <FileUpload.HiddenInput />
    <FileUpload.Trigger :asChild="true">
      <Button variant="outline" size="sm"> <Icon name="upload" /> Upload images </Button>
    </FileUpload.Trigger>
    <FileUpload.ItemGroup>
      <FileUpload.Context v-slot="fileUpload">
        <FileUpload.Item v-for="file in fileUpload.acceptedFiles" :key="file.name" :file="file">
          <FileUpload.ItemPreviewImage boxSize="10" objectFit="cover" borderRadius="l1" />
          <FileUpload.ItemContent>
            <FileUpload.ItemName />
            <FileUpload.ItemSizeText />
          </FileUpload.ItemContent>
          <FileUpload.ItemDeleteTrigger />
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>
  </FileUpload.Root>
</template>
