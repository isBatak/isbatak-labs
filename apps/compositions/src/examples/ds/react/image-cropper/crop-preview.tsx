import { useState } from "react"
import { Button } from "@isbatak/react-ui/button"
import { Icon } from "@isbatak/react-ui/icon"
import { Image } from "@isbatak/react-ui/image"
import { ImageCropper, useImageCropper } from "@isbatak/react-ui/image-cropper"
import { HStack, Stack } from "@isbatak/react-ui/stack"
import { Text } from "@isbatak/react-ui/text"

export function ImageCropperCropPreviewDemo() {
  const imageCropper = useImageCropper()
  const [preview, setPreview] = useState<string | null>(null)

  const handleCrop = async () => {
    const result = await imageCropper.getCroppedImage({ output: "dataUrl" })
    if (typeof result === "string") {
      setPreview(result)
    }
  }

  return (
    <Stack gap="4" maxW="md" w="full">
      <HStack>
        <Button size="sm" onClick={handleCrop}>
          <Icon name="crop" />
          Crop image
        </Button>
      </HStack>
      <ImageCropper.RootProvider value={imageCropper}>
        <ImageCropper.Viewport>
          <ImageCropper.Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg"
            alt="The Hay Wain by John Constable"
            crossOrigin="anonymous"
          />
          <ImageCropper.Selection />
        </ImageCropper.Viewport>
      </ImageCropper.RootProvider>
      <Stack gap="2" p="4" bg="bg.muted" borderWidth="1px" borderRadius="l2">
        <Text textStyle="xs" fontWeight="medium" color="fg.muted" textTransform="uppercase" letterSpacing="wide">
          Preview
        </Text>
        {preview && (
          <Image src={preview} alt="Cropped preview" maxW="32" maxH="32" objectFit="contain" borderRadius="l1" />
        )}
      </Stack>
    </Stack>
  )
}
