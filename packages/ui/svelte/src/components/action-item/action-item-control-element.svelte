<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type ActionItemControlElementProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { Box } from "../box"
  import { useActionItemStyles } from "./action-item-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: ActionItemControlElementProps<T> = $props()
  const styles = useActionItemStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().controlElement, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref data-slot="controlElement" {...boxProps} />
