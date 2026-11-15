import { useState } from "react"
import { Button, ButtonGroup } from "@isbatak/react-ui/button"
import { Icon } from "@isbatak/react-ui/icon"
import { ImageCropper } from "@isbatak/react-ui/image-cropper"
import { Stack } from "@isbatak/react-ui/stack"

export function ImageCropperFlipDemo() {
  const [flip, setFlip] = useState({ horizontal: false, vertical: false })

  return (
    <Stack gap="4" maxW="md" w="full">
      <ButtonGroup size="sm">
        <Button
          variant={flip.horizontal ? "solid" : "outline"}
          onClick={() => setFlip({ ...flip, horizontal: !flip.horizontal })}
        >
          <Icon name="flip-horizontal" />
          Horizontal
        </Button>
        <Button
          variant={flip.vertical ? "solid" : "outline"}
          onClick={() => setFlip({ ...flip, vertical: !flip.vertical })}
        >
          <Icon name="flip-vertical" />
          Vertical
        </Button>
      </ButtonGroup>
      <ImageCropper.Root flip={flip} onFlipChange={(details) => setFlip(details.flip)}>
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
