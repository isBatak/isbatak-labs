<script lang="ts">
  import { Button, ButtonGroup, IconButton } from "@isbatak/svelte-ui/button"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { ImageCropper, useImageCropper } from "@isbatak/svelte-ui/image-cropper"
  import { Stack } from "@isbatak/svelte-ui/stack"

  const id = $props.id()
  const imageCropper = useImageCropper({ id })
</script>

<Stack gap="4" maxW="md" w="full">
  <ButtonGroup size="sm" variant="outline">
    <IconButton aria-label="Zoom out" onclick={() => imageCropper().zoomBy(-0.1)}>
      <Icon name="zoom-out" />
    </IconButton>
    <IconButton aria-label="Zoom in" onclick={() => imageCropper().zoomBy(0.1)}>
      <Icon name="zoom-in" />
    </IconButton>
    <IconButton aria-label="Rotate left" onclick={() => imageCropper().rotateBy(-90)}>
      <Icon name="undo" />
    </IconButton>
    <IconButton aria-label="Rotate right" onclick={() => imageCropper().rotateBy(90)}>
      <Icon name="redo" />
    </IconButton>
    <IconButton aria-label="Flip horizontally" onclick={() => imageCropper().flipHorizontally()}>
      <Icon name="flip-horizontal" />
    </IconButton>
    <Button variant="surface" onclick={() => imageCropper().reset()}>
      <Icon name="refresh" />
      Reset
    </Button>
  </ButtonGroup>
  <ImageCropper.RootProvider value={imageCropper}>
    <ImageCropper.Viewport>
      <ImageCropper.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg" alt="The Hay Wain by John Constable" />
      <ImageCropper.Selection />
    </ImageCropper.Viewport>
  </ImageCropper.RootProvider>
</Stack>
