<script module lang="ts">
  import { ImageCropper } from "@ark-ui/svelte/image-cropper"

  export type ImageCropperSelectionProps = ImageCropper.SelectionProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import ImageCropperGrid from "./image-cropper-grid.svelte"
  import ImageCropperHandle from "./image-cropper-handle.svelte"
  import { useImageCropperStyles } from "./image-cropper-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: ImageCropperSelectionProps = $props()
  const styles = useImageCropperStyles()
</script>

<ImageCropper.Selection bind:ref {...props} data-slot="selection" class={[!unstyled && styles().selection, className]}>
  {#if children}
    {@render children()}
  {:else}
    <ImageCropperHandle placement="nw" />
    <ImageCropperHandle placement="n" />
    <ImageCropperHandle placement="ne" />
    <ImageCropperHandle placement="e" />
    <ImageCropperHandle placement="se" />
    <ImageCropperHandle placement="s" />
    <ImageCropperHandle placement="sw" />
    <ImageCropperHandle placement="w" />
    <ImageCropperGrid axis="horizontal" />
    <ImageCropperGrid axis="vertical" />
  {/if}
</ImageCropper.Selection>
