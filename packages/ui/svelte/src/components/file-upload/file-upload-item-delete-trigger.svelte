<script module lang="ts">
  import { FileUpload } from "@ark-ui/svelte/file-upload"

  export type FileUploadItemDeleteTriggerProps = FileUpload.ItemDeleteTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useFileUploadStyles } from "./file-upload-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: FileUploadItemDeleteTriggerProps = $props()
  const styles = useFileUploadStyles()
</script>

<FileUpload.ItemDeleteTrigger bind:ref aria-label="Remove file" {...props} data-slot="itemDeleteTrigger" class={[!unstyled && styles().itemDeleteTrigger, className]}>
  {#if children}{@render children()}{:else}<Icon name="close" />{/if}
</FileUpload.ItemDeleteTrigger>
