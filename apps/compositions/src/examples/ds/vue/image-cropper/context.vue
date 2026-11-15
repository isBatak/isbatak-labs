<script setup lang="ts">
import { IconButton } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
import { ImageCropper } from "@isbatak/vue-ui/image-cropper"
import { HStack, Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
</script>

<template>
  <Stack gap="4" maxW="md" w="full">
    <ImageCropper.Root>
      <ImageCropper.Context v-slot="context">
        <HStack gap="2">
          <IconButton variant="outline" size="sm" aria-label="Zoom out" @click="context.zoomBy(-0.1)">
            <Icon name="zoom-out" />
          </IconButton>
          <Text textStyle="sm" minW="12" textAlign="center"> {{ context.zoom.toFixed(1) }}x </Text>
          <IconButton variant="outline" size="sm" aria-label="Zoom in" @click="context.zoomBy(0.1)">
            <Icon name="zoom-in" />
          </IconButton>
        </HStack>
      </ImageCropper.Context>
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
