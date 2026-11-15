<script setup lang="ts">
import { Button, ButtonGroup, IconButton } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
import { ImageCropper, useImageCropper } from "@isbatak/vue-ui/image-cropper"
import { Stack } from "@isbatak/vue-ui/stack"

const imageCropper = useImageCropper()
</script>

<template>
  <Stack gap="4" maxW="md" w="full">
    <ButtonGroup size="sm" variant="outline">
      <IconButton aria-label="Zoom out" @click="imageCropper.zoomBy(-0.1)">
        <Icon name="zoom-out" />
      </IconButton>
      <IconButton aria-label="Zoom in" @click="imageCropper.zoomBy(0.1)">
        <Icon name="zoom-in" />
      </IconButton>
      <IconButton aria-label="Rotate left" @click="imageCropper.rotateBy(-90)">
        <Icon name="undo" />
      </IconButton>
      <IconButton aria-label="Rotate right" @click="imageCropper.rotateBy(90)">
        <Icon name="redo" />
      </IconButton>
      <IconButton aria-label="Flip horizontally" @click="imageCropper.flipHorizontally()">
        <Icon name="flip-horizontal" />
      </IconButton>
      <Button variant="surface" @click="imageCropper.reset()">
        <Icon name="refresh" />
        Reset
      </Button>
    </ButtonGroup>
    <ImageCropper.RootProvider :value="imageCropper">
      <ImageCropper.Viewport>
        <ImageCropper.Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg"
          alt="The Hay Wain by John Constable"
        />
        <ImageCropper.Selection />
      </ImageCropper.Viewport>
    </ImageCropper.RootProvider>
  </Stack>
</template>
