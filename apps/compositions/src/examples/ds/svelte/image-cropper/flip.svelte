<script lang="ts">
  import { Button, ButtonGroup } from "@isbatak/svelte-ui/button"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { ImageCropper } from "@isbatak/svelte-ui/image-cropper"
  import { Stack } from "@isbatak/svelte-ui/stack"

  let flip = $state({ horizontal: false, vertical: false })
</script>

<Stack gap="4" maxW="md" w="full">
  <ButtonGroup size="sm">
    <Button variant={flip.horizontal ? "solid" : "outline"} onclick={() => (flip = { ...flip, horizontal: !flip.horizontal })}>
      <Icon name="flip-horizontal" />
      Horizontal
    </Button>
    <Button variant={flip.vertical ? "solid" : "outline"} onclick={() => (flip = { ...flip, vertical: !flip.vertical })}>
      <Icon name="flip-vertical" />
      Vertical
    </Button>
  </ButtonGroup>
  <ImageCropper.Root bind:flip>
    <ImageCropper.Viewport>
      <ImageCropper.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg" alt="The Hay Wain by John Constable" />
      <ImageCropper.Selection />
    </ImageCropper.Viewport>
  </ImageCropper.Root>
</Stack>
