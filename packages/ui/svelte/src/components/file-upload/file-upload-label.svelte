<script module lang="ts">
  import { FileUpload } from "@ark-ui/svelte/file-upload"

  export type FileUploadLabelProps = FileUpload.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFileUploadStyles } from "./file-upload-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FileUploadLabelProps = $props()
  const styles = useFileUploadStyles()
</script>

<FileUpload.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
