<script lang="ts">
  import { Button, ButtonGroup } from "@isbatak/svelte-ui/button"
  import { ImageCropper } from "@isbatak/svelte-ui/image-cropper"
  import { Stack } from "@isbatak/svelte-ui/stack"

  let aspectRatio = $state(16 / 9)
</script>

<Stack gap="4" maxW="md" w="full">
  <ButtonGroup size="sm">
    <Button variant={aspectRatio === 16 / 9 ? "solid" : "outline"} onclick={() => (aspectRatio = 16 / 9)}>
      16:9
    </Button>
    <Button variant={aspectRatio === 1 ? "solid" : "outline"} onclick={() => (aspectRatio = 1)}>
      1:1
    </Button>
    <Button variant={aspectRatio === 9 / 16 ? "solid" : "outline"} onclick={() => (aspectRatio = 9 / 16)}>
      9:16
    </Button>
  </ButtonGroup>
  <ImageCropper.Root aspectRatio={aspectRatio}>
    <ImageCropper.Viewport>
      <ImageCropper.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg" alt="The Hay Wain by John Constable" />
      <ImageCropper.Selection />
    </ImageCropper.Viewport>
  </ImageCropper.Root>
</Stack>
