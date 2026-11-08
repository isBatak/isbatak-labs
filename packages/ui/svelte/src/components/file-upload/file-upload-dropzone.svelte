<script module lang="ts">
  import { FileUpload } from "@ark-ui/svelte/file-upload"

  export type FileUploadDropzoneProps = FileUpload.DropzoneProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFileUploadStyles } from "./file-upload-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FileUploadDropzoneProps = $props()
  const styles = useFileUploadStyles()
</script>

<FileUpload.Dropzone bind:ref {...props} data-slot="dropzone" class={[!unstyled && styles().dropzone, className]} />
