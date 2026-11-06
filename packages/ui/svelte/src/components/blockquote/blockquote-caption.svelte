<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type BlockquoteCaptionProps<T extends keyof SvelteHTMLElements = "figcaption"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'figcaption'">
  import { Box } from "../box"
  import { useBlockquoteStyles } from "./blockquote-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: BlockquoteCaptionProps<T> = $props()
  const styles = useBlockquoteStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().caption, className] } as Record<string, unknown>)
</script>

<Box as="figcaption" bind:ref {...boxProps} />
