<script lang="ts">
  import { ImageCropper } from "@isbatak/svelte-ui/image-cropper"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"
</script>

<Stack gap="6" maxW="md" w="full">
  <Stack gap="2">
    <Text textStyle="sm" color="fg.muted">
      sm
    </Text>
    <ImageCropper.Root size="sm">
      <ImageCropper.Viewport>
        <ImageCropper.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg" alt="The Hay Wain by John Constable" />
        <ImageCropper.Selection />
      </ImageCropper.Viewport>
    </ImageCropper.Root>
  </Stack>
  <Stack gap="2">
    <Text textStyle="sm" color="fg.muted">
      md
    </Text>
    <ImageCropper.Root size="md">
      <ImageCropper.Viewport>
        <ImageCropper.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg" alt="The Hay Wain by John Constable" />
        <ImageCropper.Selection />
      </ImageCropper.Viewport>
    </ImageCropper.Root>
  </Stack>
  <Stack gap="2">
    <Text textStyle="sm" color="fg.muted">
      lg
    </Text>
    <ImageCropper.Root size="lg">
      <ImageCropper.Viewport>
        <ImageCropper.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg" alt="The Hay Wain by John Constable" />
        <ImageCropper.Selection />
      </ImageCropper.Viewport>
    </ImageCropper.Root>
  </Stack>
</Stack>
