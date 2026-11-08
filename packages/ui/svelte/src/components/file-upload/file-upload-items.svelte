<script module lang="ts">
  import type { FileUploadItemProps } from "./file-upload-item.svelte"

  export type FileUploadItemsProps = Omit<FileUploadItemProps, "file"> & {
    showSize?: boolean | undefined
    clearable?: boolean | undefined
  }
</script>

<script lang="ts">
  import { useFileUploadContext } from "@ark-ui/svelte/file-upload"
  import { css } from "@isbatak/panda-ds/css"

  import FileUploadItem from "./file-upload-item.svelte"
  import FileUploadItemContent from "./file-upload-item-content.svelte"
  import FileUploadItemDeleteTrigger from "./file-upload-item-delete-trigger.svelte"
  import FileUploadItemName from "./file-upload-item-name.svelte"
  import FileUploadItemPreview from "./file-upload-item-preview.svelte"
  import FileUploadItemSizeText from "./file-upload-item-size-text.svelte"

  let { showSize, clearable, ...props }: FileUploadItemsProps = $props()
  const fileUpload = useFileUploadContext()
</script>

{#each fileUpload().acceptedFiles as file (file.name)}
  <FileUploadItem {file} {...props}>
    <FileUploadItemPreview />
    {#if showSize}
      <FileUploadItemContent>
        <FileUploadItemName />
        <FileUploadItemSizeText />
      </FileUploadItemContent>
    {:else}
      <FileUploadItemName class={css({ flex: "1" })} />
    {/if}
    {#if clearable}<FileUploadItemDeleteTrigger />{/if}
  </FileUploadItem>
{/each}
