<script module lang="ts">
  import { ImageCropper } from "@ark-ui/svelte/image-cropper"

  export type ImageCropperImageProps = ImageCropper.ImageProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useImageCropperStyles } from "./image-cropper-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ImageCropperImageProps = $props()
  const styles = useImageCropperStyles()
</script>

<ImageCropper.Image bind:ref {...props} data-slot="image" class={[!unstyled && styles().image, className]} />
