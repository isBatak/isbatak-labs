<script setup lang="ts">
import { ImageCropper } from "@isbatak/vue-ui/image-cropper"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="4" maxW="md" w="full">
    <ImageCropper.Root fixedCropArea>
      <ImageCropper.Viewport>
        <ImageCropper.Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg"
          alt="The Hay Wain by John Constable"
        />
        <ImageCropper.Selection />
      </ImageCropper.Viewport>
    </ImageCropper.Root>
  </Stack>
</template>
