<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type FileUploadDropzoneContentProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { Box } from "../box"
  import { useFileUploadStyles } from "./file-upload-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: FileUploadDropzoneContentProps<T> = $props()
  const styles = useFileUploadStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().dropzoneContent, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref {...boxProps} data-slot="dropzoneContent" />
