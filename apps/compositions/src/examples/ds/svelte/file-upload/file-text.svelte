<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { FileUpload } from "@isbatak/svelte-ui/file-upload"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<FileUpload.Root class={css({ maxW: "sm" })}>
  <FileUpload.HiddenInput />
  <FileUpload.Label>Resume</FileUpload.Label>
  <HStack gap="2" width="full">
    <FileUpload.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline" class={css({ flex: "1", justifyContent: "flex-start" })}>
          <Icon name="paperclip" />
          <FileUpload.FileText fallback="Select a PDF" />
        </Button>
      {/snippet}
    </FileUpload.Trigger>
    <FileUpload.ClearTrigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="ghost">
          Clear
        </Button>
      {/snippet}
    </FileUpload.ClearTrigger>
  </HStack>
</FileUpload.Root>
