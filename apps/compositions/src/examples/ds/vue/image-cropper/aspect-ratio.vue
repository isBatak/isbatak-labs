<script setup lang="ts">
import { ref } from "vue"
import { Button, ButtonGroup } from "@isbatak/vue-ui/button"
import { ImageCropper } from "@isbatak/vue-ui/image-cropper"
import { Stack } from "@isbatak/vue-ui/stack"

const aspectRatio = ref(16 / 9)
</script>

<template>
  <Stack gap="4" maxW="md" w="full">
    <ButtonGroup size="sm">
      <Button :variant="aspectRatio === 16 / 9 ? 'solid' : 'outline'" @click="aspectRatio = 16 / 9"> 16:9 </Button>
      <Button :variant="aspectRatio === 1 ? 'solid' : 'outline'" @click="aspectRatio = 1"> 1:1 </Button>
      <Button :variant="aspectRatio === 9 / 16 ? 'solid' : 'outline'" @click="aspectRatio = 9 / 16"> 9:16 </Button>
    </ButtonGroup>
    <ImageCropper.Root :aspectRatio="aspectRatio">
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
