<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type BlockquoteContentProps<T extends keyof SvelteHTMLElements = "blockquote"> = BoxProps<T>
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'blockquote'">
  import { Box } from "../box"
  import { useBlockquoteStyles } from "./blockquote-styles"

  let { ref = $bindable(), class: className, ...props }: BlockquoteContentProps<T> = $props()
  const styles = useBlockquoteStyles()
  const boxProps = $derived({ ...props, class: [styles().content, className] } as Record<string, unknown>)
</script>

<Box as="blockquote" bind:ref {...boxProps} />
