<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface FileUploadFileTextProps extends HTMLAttributes<HTMLSpanElement> {
    ref?: HTMLSpanElement | null
    unstyled?: boolean | undefined
    fallback?: string | undefined
  }
</script>

<script lang="ts">
  import { useFileUploadContext } from "@ark-ui/svelte/file-upload"

  import { useFileUploadStyles } from "./file-upload-styles"

  let {
    ref = $bindable(null),
    unstyled,
    class: className,
    fallback = "Select file",
    children,
    ...props
  }: FileUploadFileTextProps = $props()
  const styles = useFileUploadStyles()
  const fileUpload = useFileUploadContext()
  const text = $derived.by(() => {
    const files = fileUpload().acceptedFiles
    if (files.length === 0) return fallback
    return files.length === 1 ? files[0]?.name : `${files.length} files`
  })
</script>

<span bind:this={ref} {...props} data-slot="fileText" class={[!unstyled && styles().fileText, className]}>
  {#if children}{@render children()}{:else}{text}{/if}
</span>
