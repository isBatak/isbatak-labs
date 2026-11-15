<script module lang="ts">
  import { ImageCropper } from "@ark-ui/svelte/image-cropper"

  export type ImageCropperHandleProps = ImageCropper.HandleProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useImageCropperStyles } from "./image-cropper-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: ImageCropperHandleProps = $props()
  const styles = useImageCropperStyles()
</script>

<ImageCropper.Handle bind:ref {...props} data-slot="handle" class={[!unstyled && styles().handle, className]}>
  {#if children}
    {@render children()}
  {:else}
    <div></div>
  {/if}
</ImageCropper.Handle>
