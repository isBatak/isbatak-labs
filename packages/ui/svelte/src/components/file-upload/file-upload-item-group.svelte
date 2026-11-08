<script module lang="ts">
  import { FileUpload } from "@ark-ui/svelte/file-upload"

  export type FileUploadItemGroupProps = FileUpload.ItemGroupProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFileUploadStyles } from "./file-upload-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FileUploadItemGroupProps = $props()
  const styles = useFileUploadStyles()
</script>

<FileUpload.ItemGroup bind:ref {...props} data-slot="itemGroup" class={[!unstyled && styles().itemGroup, className]} />
