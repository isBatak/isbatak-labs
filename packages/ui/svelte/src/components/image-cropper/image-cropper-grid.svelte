<script module lang="ts">
  import { ImageCropper } from "@ark-ui/svelte/image-cropper"

  export type ImageCropperGridProps = ImageCropper.GridProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useImageCropperStyles } from "./image-cropper-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ImageCropperGridProps = $props()
  const styles = useImageCropperStyles()
</script>

<ImageCropper.Grid bind:ref {...props} data-slot="grid" class={[!unstyled && styles().grid, className]} />
