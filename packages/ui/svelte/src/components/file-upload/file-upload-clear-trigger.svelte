<script module lang="ts">
  import { FileUpload } from "@ark-ui/svelte/file-upload"

  export type FileUploadClearTriggerProps = FileUpload.ClearTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFileUploadStyles } from "./file-upload-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FileUploadClearTriggerProps = $props()
  const styles = useFileUploadStyles()
</script>

<FileUpload.ClearTrigger bind:ref {...props} data-slot="clearTrigger" class={[!unstyled && styles().clearTrigger, className]} />
