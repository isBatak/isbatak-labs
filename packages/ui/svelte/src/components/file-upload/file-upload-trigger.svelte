<script module lang="ts">
  import { FileUpload } from "@ark-ui/svelte/file-upload"

  export type FileUploadTriggerProps = FileUpload.TriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFileUploadStyles } from "./file-upload-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FileUploadTriggerProps = $props()
  const styles = useFileUploadStyles()
</script>

<FileUpload.Trigger bind:ref {...props} data-slot="trigger" class={[!unstyled && styles().trigger, className]} />
