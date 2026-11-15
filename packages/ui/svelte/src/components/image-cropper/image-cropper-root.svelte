<script module lang="ts">
  import { ImageCropper } from "@ark-ui/svelte/image-cropper"
  import { imageCropper, type ImageCropperVariantProps } from "@isbatak/panda-ds/recipes"

  export type ImageCropperRootProps = ImageCropper.RootProps & ImageCropperVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideImageCropperStyles } from "./image-cropper-styles"

  let {
    ref = $bindable(null),
    zoom = $bindable(),
    rotation = $bindable(),
    flip = $bindable(),
    unstyled,
    class: className,
    ...props
  }: ImageCropperRootProps = $props()
  const [variantProps, localProps] = $derived(imageCropper.splitVariantProps(props))
  const styles = $derived(imageCropper(variantProps))
  provideImageCropperStyles(() => styles)
</script>

<ImageCropper.Root
  bind:ref
  bind:zoom
  bind:rotation
  bind:flip
  {...localProps}
  data-slot="root"
  class={[!unstyled && styles.root, className]}
/>
