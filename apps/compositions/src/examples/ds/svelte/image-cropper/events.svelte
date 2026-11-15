<script lang="ts">
  import { ImageCropper } from "@isbatak/svelte-ui/image-cropper"
  import { HStack, Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"

  let crop = $state({ x: 0, y: 0, width: 0, height: 0 })
  let zoom = $state(1)
</script>

<Stack gap="4" maxW="md" w="full">
  <ImageCropper.Root onCropChange={(details) => (crop = details.crop)} onZoomChange={(details) => (zoom = details.zoom)}>
    <ImageCropper.Viewport>
      <ImageCropper.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg" alt="The Hay Wain by John Constable" />
      <ImageCropper.Selection />
    </ImageCropper.Viewport>
  </ImageCropper.Root>
  <HStack gap="6" px="4" py="3" bg="bg.muted" borderWidth="1px" borderRadius="l2">
    <Stack gap="0.5">
      <Text textStyle="xs" fontWeight="medium" color="fg.muted" textTransform="uppercase" letterSpacing="wide">
        Zoom
      </Text>
      <Text textStyle="sm" fontWeight="medium" fontVariantNumeric="tabular-nums">
        {zoom.toFixed(2)}x
      </Text>
    </Stack>
    <Stack gap="0.5">
      <Text textStyle="xs" fontWeight="medium" color="fg.muted" textTransform="uppercase" letterSpacing="wide">
        Position
      </Text>
      <Text textStyle="sm" fontWeight="medium" fontVariantNumeric="tabular-nums">
        {Math.round(crop.x)}, {Math.round(crop.y)}
      </Text>
    </Stack>
    <Stack gap="0.5">
      <Text textStyle="xs" fontWeight="medium" color="fg.muted" textTransform="uppercase" letterSpacing="wide">
        Size
      </Text>
      <Text textStyle="sm" fontWeight="medium" fontVariantNumeric="tabular-nums">
        {Math.round(crop.width)} × {Math.round(crop.height)}
      </Text>
    </Stack>
  </HStack>
</Stack>
