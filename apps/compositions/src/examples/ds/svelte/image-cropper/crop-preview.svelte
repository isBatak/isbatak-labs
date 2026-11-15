<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Image } from "@isbatak/svelte-ui/image"
  import { ImageCropper, useImageCropper } from "@isbatak/svelte-ui/image-cropper"
  import { HStack, Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"

  const id = $props.id()
  const imageCropper = useImageCropper({ id })
  let preview = $state<string | null>(null)

  const handleCrop = async () => {
    const result = await imageCropper().getCroppedImage({ output: "dataUrl" })
    if (typeof result === "string") {
      preview = result
    }
  }
</script>

<Stack gap="4" maxW="md" w="full">
  <HStack>
    <Button size="sm" onclick={handleCrop}>
      <Icon name="crop" />
      Crop image
    </Button>
  </HStack>
  <ImageCropper.RootProvider value={imageCropper}>
    <ImageCropper.Viewport>
      <ImageCropper.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg" alt="The Hay Wain by John Constable" crossorigin="anonymous" />
      <ImageCropper.Selection />
    </ImageCropper.Viewport>
  </ImageCropper.RootProvider>
  <Stack gap="2" p="4" bg="bg.muted" borderWidth="1px" borderRadius="l2">
    <Text textStyle="xs" fontWeight="medium" color="fg.muted" textTransform="uppercase" letterSpacing="wide">
      Preview
    </Text>
    {#if preview}
      <Image src={preview} alt="Cropped preview" maxW="32" maxH="32" objectFit="contain" borderRadius="l1" />
    {/if}
  </Stack>
</Stack>
