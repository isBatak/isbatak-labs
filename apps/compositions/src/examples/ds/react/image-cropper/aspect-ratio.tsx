import { useState } from "react"
import { Button, ButtonGroup } from "@isbatak/react-ui/button"
import { ImageCropper } from "@isbatak/react-ui/image-cropper"
import { Stack } from "@isbatak/react-ui/stack"

export function ImageCropperAspectRatioDemo() {
  const [aspectRatio, setAspectRatio] = useState(16 / 9)

  return (
    <Stack gap="4" maxW="md" w="full">
      <ButtonGroup size="sm">
        <Button variant={aspectRatio === 16 / 9 ? "solid" : "outline"} onClick={() => setAspectRatio(16 / 9)}>
          16:9
        </Button>
        <Button variant={aspectRatio === 1 ? "solid" : "outline"} onClick={() => setAspectRatio(1)}>
          1:1
        </Button>
        <Button variant={aspectRatio === 9 / 16 ? "solid" : "outline"} onClick={() => setAspectRatio(9 / 16)}>
          9:16
        </Button>
      </ButtonGroup>
      <ImageCropper.Root aspectRatio={aspectRatio}>
        <ImageCropper.Viewport>
          <ImageCropper.Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg"
            alt="The Hay Wain by John Constable"
          />
          <ImageCropper.Selection />
        </ImageCropper.Viewport>
      </ImageCropper.Root>
    </Stack>
  )
}
