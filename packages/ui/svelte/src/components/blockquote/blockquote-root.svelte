<script module lang="ts">
  import type { BlockquoteVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type BlockquoteRootProps<T extends keyof SvelteHTMLElements = "figure"> = BoxProps<T> & BlockquoteVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'figure'">
  import { blockquote } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"
  import { provideBlockquoteStyles } from "./blockquote-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: BlockquoteRootProps<T> = $props()
  const [variantProps, rest] = $derived(blockquote.splitVariantProps(props))
  const styles = $derived(blockquote(variantProps))
  provideBlockquoteStyles(() => styles)
  const boxProps = $derived({ ...rest, class: [!unstyled && styles.root, className] } as Record<string, unknown>)
</script>

<Box as="figure" bind:ref {...boxProps} />
