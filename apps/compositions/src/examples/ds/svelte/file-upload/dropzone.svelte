<script lang="ts">
  import { FileUpload } from "@isbatak/svelte-ui/file-upload"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { css } from "styled-system/css"
</script>

<FileUpload.Root maxFiles={5} class={css({ maxW: "md" })}>
  <FileUpload.HiddenInput />
  <FileUpload.Dropzone class={css({ width: "full" })}>
    <Icon name="upload" size="lg" class={css({ color: "fg.muted" })} />
    <FileUpload.DropzoneContent>
      <span>Drag and drop files here</span>
      <span class={css({ color: "fg.muted" })}>.png, .jpg up to 5MB</span>
    </FileUpload.DropzoneContent>
  </FileUpload.Dropzone>
  <FileUpload.List showSize clearable />
</FileUpload.Root>
