<script setup lang="ts">
import { ref } from "vue"
import { Button, ButtonGroup } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
import { ImageCropper } from "@isbatak/vue-ui/image-cropper"
import { Stack } from "@isbatak/vue-ui/stack"

const flip = ref({ horizontal: false, vertical: false })
</script>

<template>
  <Stack gap="4" maxW="md" w="full">
    <ButtonGroup size="sm">
      <Button
        :variant="flip.horizontal ? 'solid' : 'outline'"
        @click="flip = { ...flip, horizontal: !flip.horizontal }"
      >
        <Icon name="flip-horizontal" />
        Horizontal
      </Button>
      <Button :variant="flip.vertical ? 'solid' : 'outline'" @click="flip = { ...flip, vertical: !flip.vertical }">
        <Icon name="flip-vertical" />
        Vertical
      </Button>
    </ButtonGroup>
    <ImageCropper.Root v-model:flip="flip">
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
