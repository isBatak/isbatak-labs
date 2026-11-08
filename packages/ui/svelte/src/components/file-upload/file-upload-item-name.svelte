<script module lang="ts">
  import { FileUpload } from "@ark-ui/svelte/file-upload"

  export type FileUploadItemNameProps = FileUpload.ItemNameProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFileUploadStyles } from "./file-upload-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FileUploadItemNameProps = $props()
  const styles = useFileUploadStyles()
</script>

<FileUpload.ItemName bind:ref {...props} data-slot="itemName" class={[!unstyled && styles().itemName, className]} />
