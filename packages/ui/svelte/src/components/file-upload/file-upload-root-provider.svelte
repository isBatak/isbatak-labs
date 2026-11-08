<script module lang="ts">
  import { FileUpload } from "@ark-ui/svelte/file-upload"
  import { fileUpload, type FileUploadVariantProps } from "@isbatak/panda-ds/recipes"

  export type FileUploadRootProviderProps = FileUpload.RootProviderProps & FileUploadVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideFileUploadStyles } from "./file-upload-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FileUploadRootProviderProps = $props()
  const [variantProps, localProps] = $derived(fileUpload.splitVariantProps(props))
  const styles = $derived(fileUpload(variantProps))
  provideFileUploadStyles(() => styles)
</script>

<FileUpload.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
