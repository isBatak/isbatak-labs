import { Button, ButtonGroup, IconButton } from "@isbatak/react-ui/button"
import { Icon } from "@isbatak/react-ui/icon"
import { ImageCropper, useImageCropper } from "@isbatak/react-ui/image-cropper"
import { Stack } from "@isbatak/react-ui/stack"

export function ImageCropperResetDemo() {
  const imageCropper = useImageCropper()

  return (
    <Stack gap="4" maxW="md" w="full">
      <ButtonGroup size="sm" variant="outline">
        <IconButton aria-label="Zoom out" onClick={() => imageCropper.zoomBy(-0.1)}>
          <Icon name="zoom-out" />
        </IconButton>
        <IconButton aria-label="Zoom in" onClick={() => imageCropper.zoomBy(0.1)}>
          <Icon name="zoom-in" />
        </IconButton>
        <IconButton aria-label="Rotate left" onClick={() => imageCropper.rotateBy(-90)}>
          <Icon name="undo" />
        </IconButton>
        <IconButton aria-label="Rotate right" onClick={() => imageCropper.rotateBy(90)}>
          <Icon name="redo" />
        </IconButton>
        <IconButton aria-label="Flip horizontally" onClick={() => imageCropper.flipHorizontally()}>
          <Icon name="flip-horizontal" />
        </IconButton>
        <Button variant="surface" onClick={() => imageCropper.reset()}>
          <Icon name="refresh" />
          Reset
        </Button>
      </ButtonGroup>
      <ImageCropper.RootProvider value={imageCropper}>
        <ImageCropper.Viewport>
          <ImageCropper.Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg"
            alt="The Hay Wain by John Constable"
          />
          <ImageCropper.Selection />
        </ImageCropper.Viewport>
      </ImageCropper.RootProvider>
    </Stack>
  )
}
