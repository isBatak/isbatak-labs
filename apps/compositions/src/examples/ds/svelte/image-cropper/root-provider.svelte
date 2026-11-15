<script lang="ts">
  import { IconButton } from "@isbatak/svelte-ui/button"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { ImageCropper, useImageCropper } from "@isbatak/svelte-ui/image-cropper"
  import { HStack, Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"

  const id = $props.id()
  const imageCropper = useImageCropper({ id })
</script>

<Stack gap="4" maxW="md" w="full">
  <HStack gap="2">
    <IconButton variant="outline" size="sm" aria-label="Zoom out" onclick={() => imageCropper().setZoom(imageCropper().zoom - 0.1)}>
      <Icon name="zoom-out" />
    </IconButton>
    <Text textStyle="sm" minW="12" textAlign="center">
      {imageCropper().zoom.toFixed(1)}x
    </Text>
    <IconButton variant="outline" size="sm" aria-label="Zoom in" onclick={() => imageCropper().setZoom(imageCropper().zoom + 0.1)}>
      <Icon name="zoom-in" />
    </IconButton>
  </HStack>
  <ImageCropper.RootProvider value={imageCropper}>
    <ImageCropper.Viewport>
      <ImageCropper.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg" alt="The Hay Wain by John Constable" />
      <ImageCropper.Selection />
    </ImageCropper.Viewport>
  </ImageCropper.RootProvider>
</Stack>
