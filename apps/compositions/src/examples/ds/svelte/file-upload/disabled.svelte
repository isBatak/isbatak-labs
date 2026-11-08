<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { FileUpload } from "@isbatak/svelte-ui/file-upload"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { css } from "styled-system/css"
</script>

<FileUpload.Root disabled class={css({ maxW: "sm" })}>
  <FileUpload.HiddenInput />
  <FileUpload.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline" size="sm">
        <Icon name="upload" /> Upload file
      </Button>
    {/snippet}
  </FileUpload.Trigger>
</FileUpload.Root>
