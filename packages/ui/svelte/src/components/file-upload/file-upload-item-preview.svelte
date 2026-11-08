<script module lang="ts">
  import { FileUpload } from "@ark-ui/svelte/file-upload"

  export type FileUploadItemPreviewProps = FileUpload.ItemPreviewProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useFileUploadStyles } from "./file-upload-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: FileUploadItemPreviewProps = $props()
  const styles = useFileUploadStyles()
</script>

<FileUpload.ItemPreview bind:ref {...props} data-slot="itemPreview" class={[!unstyled && styles().itemPreview, className]}>
  {#if children}{@render children()}{:else}<Icon name="file" />{/if}
</FileUpload.ItemPreview>
