<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type ActionItemEndElementProps<T extends keyof SvelteHTMLElements = "span"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'span'">
  import { Box } from "../box"
  import { useActionItemStyles } from "./action-item-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: ActionItemEndElementProps<T> = $props()
  const styles = useActionItemStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().endElement, className] } as Record<string, unknown>)
</script>

<Box as="span" bind:ref data-slot="endElement" {...boxProps} />
