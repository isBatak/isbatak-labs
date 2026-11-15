<script module lang="ts">
  import { ImageCropper } from "@ark-ui/svelte/image-cropper"
  import { imageCropper, type ImageCropperVariantProps } from "@isbatak/panda-ds/recipes"

  export type ImageCropperRootProviderProps = ImageCropper.RootProviderProps &
    ImageCropperVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideImageCropperStyles } from "./image-cropper-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ImageCropperRootProviderProps = $props()
  const [variantProps, localProps] = $derived(imageCropper.splitVariantProps(props))
  const styles = $derived(imageCropper(variantProps))
  provideImageCropperStyles(() => styles)
</script>

<ImageCropper.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
