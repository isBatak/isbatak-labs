<script setup lang="ts">
import { ref } from "vue"
import { IconButton } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
import { ImageCropper } from "@isbatak/vue-ui/image-cropper"
import { HStack, Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"

const rotation = ref(0)
</script>

<template>
  <Stack gap="4" maxW="md" w="full">
    <HStack gap="2">
      <IconButton variant="outline" size="sm" aria-label="Rotate left" @click="rotation = rotation - 90">
        <Icon name="undo" />
      </IconButton>
      <IconButton variant="outline" size="sm" aria-label="Rotate right" @click="rotation = rotation + 90">
        <Icon name="redo" />
      </IconButton>
      <Text textStyle="sm" px="2"> {{ rotation }}° </Text>
    </HStack>
    <ImageCropper.Root v-model:rotation="rotation">
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
