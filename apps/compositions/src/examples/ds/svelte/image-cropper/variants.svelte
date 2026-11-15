<script lang="ts">
  import { ImageCropper } from "@isbatak/svelte-ui/image-cropper"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"
</script>

<Stack gap="6" maxW="md" w="full">
  <Stack gap="2">
    <Text textStyle="sm" color="fg.muted">
      subtle
    </Text>
    <ImageCropper.Root variant="subtle">
      <ImageCropper.Viewport>
        <ImageCropper.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg" alt="The Hay Wain by John Constable" />
        <ImageCropper.Selection />
      </ImageCropper.Viewport>
    </ImageCropper.Root>
  </Stack>
  <Stack gap="2">
    <Text textStyle="sm" color="fg.muted">
      outline
    </Text>
    <ImageCropper.Root variant="outline">
      <ImageCropper.Viewport>
        <ImageCropper.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg" alt="The Hay Wain by John Constable" />
        <ImageCropper.Selection />
      </ImageCropper.Viewport>
    </ImageCropper.Root>
  </Stack>
</Stack>
