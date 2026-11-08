<script module lang="ts">
  import { FileUpload } from "@ark-ui/svelte/file-upload"

  export type FileUploadItemSizeTextProps = FileUpload.ItemSizeTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFileUploadStyles } from "./file-upload-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FileUploadItemSizeTextProps = $props()
  const styles = useFileUploadStyles()
</script>

<FileUpload.ItemSizeText bind:ref {...props} data-slot="itemSizeText" class={[!unstyled && styles().itemSizeText, className]} />
