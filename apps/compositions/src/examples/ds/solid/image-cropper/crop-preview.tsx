import { createSignal, Show } from "solid-js"
import { Button } from "@isbatak/solid-ui/button"
import { Icon } from "@isbatak/solid-ui/icon"
import { Image } from "@isbatak/solid-ui/image"
import { ImageCropper, useImageCropper } from "@isbatak/solid-ui/image-cropper"
import { HStack, Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"

export function ImageCropperCropPreviewDemo() {
  const imageCropper = useImageCropper()
  const [preview, setPreview] = createSignal<string | null>(null)

  const handleCrop = async () => {
    const result = await imageCropper().getCroppedImage({ output: "dataUrl" })
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
        <Show when={preview()}>
          {(src) => (
            <Image src={src()} alt="Cropped preview" maxW="32" maxH="32" objectFit="contain" borderRadius="l1" />
          )}
        </Show>
      </Stack>
    </Stack>
  )
}
