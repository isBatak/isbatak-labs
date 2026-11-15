<script module lang="ts">
  import { ImageCropper } from "@ark-ui/svelte/image-cropper"

  export type ImageCropperViewportProps = ImageCropper.ViewportProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useImageCropperStyles } from "./image-cropper-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ImageCropperViewportProps = $props()
  const styles = useImageCropperStyles()
</script>

<ImageCropper.Viewport bind:ref {...props} data-slot="viewport" class={[!unstyled && styles().viewport, className]} />
