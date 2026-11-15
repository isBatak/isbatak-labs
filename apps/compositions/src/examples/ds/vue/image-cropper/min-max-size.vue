<script setup lang="ts">
import { ImageCropper } from "@isbatak/vue-ui/image-cropper"
import { Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
</script>

<template>
  <Stack gap="4" maxW="md" w="full">
    <Text textStyle="sm" color="fg.muted"> Crop area constrained to min 80px and max 200px </Text>
    <ImageCropper.Root :minWidth="80" :minHeight="80" :maxWidth="200" :maxHeight="200">
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
