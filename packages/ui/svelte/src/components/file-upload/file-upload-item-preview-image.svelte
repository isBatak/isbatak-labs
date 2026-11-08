<script module lang="ts">
  import { FileUpload } from "@ark-ui/svelte/file-upload"

  export type FileUploadItemPreviewImageProps = FileUpload.ItemPreviewImageProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFileUploadStyles } from "./file-upload-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FileUploadItemPreviewImageProps = $props()
  const styles = useFileUploadStyles()
</script>

<FileUpload.ItemPreviewImage bind:ref {...props} data-slot="itemPreviewImage" class={[!unstyled && styles().itemPreviewImage, className]} />
