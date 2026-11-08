<script module lang="ts">
  import type { FileUploadItemGroupProps } from "./file-upload-item-group.svelte"
  import type { FileUploadItemsProps } from "./file-upload-items.svelte"

  export type FileUploadListProps = FileUploadItemGroupProps & Pick<FileUploadItemsProps, "showSize" | "clearable">
</script>

<script lang="ts">
  import FileUploadItemGroup from "./file-upload-item-group.svelte"
  import FileUploadItems from "./file-upload-items.svelte"

  let { showSize, clearable, ...props }: FileUploadListProps = $props()
</script>

<FileUploadItemGroup {...props}>
  <FileUploadItems {showSize} {clearable} />
</FileUploadItemGroup>
