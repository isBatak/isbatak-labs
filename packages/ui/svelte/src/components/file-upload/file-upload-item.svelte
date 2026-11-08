<script module lang="ts">
  import { FileUpload } from "@ark-ui/svelte/file-upload"

  export type FileUploadItemProps = FileUpload.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFileUploadStyles } from "./file-upload-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FileUploadItemProps = $props()
  const styles = useFileUploadStyles()
</script>

<FileUpload.Item bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
