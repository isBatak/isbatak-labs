<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { FileUpload } from "@isbatak/svelte-ui/file-upload"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { css } from "styled-system/css"
</script>

<FileUpload.Root accept="image/*" maxFiles={3} class={css({ maxW: "sm" })}>
  <FileUpload.HiddenInput />
  <FileUpload.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline" size="sm">
        <Icon name="upload" /> Upload images
      </Button>
    {/snippet}
  </FileUpload.Trigger>
  <FileUpload.ItemGroup>
    <FileUpload.Context>
      {#snippet render(fileUpload)}
        {#each fileUpload().acceptedFiles as file (file.name)}
          <FileUpload.Item {file}>
            <FileUpload.ItemPreviewImage class={css({ boxSize: "10", objectFit: "cover", borderRadius: "l1" })} />
            <FileUpload.ItemContent>
              <FileUpload.ItemName />
              <FileUpload.ItemSizeText />
            </FileUpload.ItemContent>
            <FileUpload.ItemDeleteTrigger />
          </FileUpload.Item>
        {/each}
      {/snippet}
    </FileUpload.Context>
  </FileUpload.ItemGroup>
</FileUpload.Root>
