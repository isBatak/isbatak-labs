<script lang="ts">
  import { IconButton } from "@isbatak/svelte-ui/button"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { ImageCropper } from "@isbatak/svelte-ui/image-cropper"
  import { HStack, Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"

  let rotation = $state(0)
</script>

<Stack gap="4" maxW="md" w="full">
  <HStack gap="2">
    <IconButton variant="outline" size="sm" aria-label="Rotate left" onclick={() => (rotation = rotation - 90)}>
      <Icon name="undo" />
    </IconButton>
    <IconButton variant="outline" size="sm" aria-label="Rotate right" onclick={() => (rotation = rotation + 90)}>
      <Icon name="redo" />
    </IconButton>
    <Text textStyle="sm" px="2">
      {rotation}°
    </Text>
  </HStack>
  <ImageCropper.Root bind:rotation>
    <ImageCropper.Viewport>
      <ImageCropper.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg" alt="The Hay Wain by John Constable" />
      <ImageCropper.Selection />
    </ImageCropper.Viewport>
  </ImageCropper.Root>
</Stack>
