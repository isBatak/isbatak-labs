<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type BlockquoteIconProps<T extends keyof SvelteHTMLElements = "span"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'span'">
  import { Box } from "../box"
  import { useBlockquoteStyles } from "./blockquote-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: BlockquoteIconProps<T> = $props()
  const styles = useBlockquoteStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().icon, className] } as Record<string, unknown>)
</script>

<Box as="span" bind:ref aria-hidden="true" {...boxProps} />
