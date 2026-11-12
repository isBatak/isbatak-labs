<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type CardFooterProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { Box } from "../box"
  import { useCardStyles } from "./card-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: CardFooterProps<T> = $props()
  const styles = useCardStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().footer, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref data-slot="footer" {...boxProps} />
