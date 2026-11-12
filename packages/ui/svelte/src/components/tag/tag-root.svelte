<script module lang="ts">
  import type { TagVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type TagRootProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & TagVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { tag } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"
  import { provideTagStyles } from "./tag-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: TagRootProps<T> = $props()
  const [variantProps, rest] = $derived(tag.splitVariantProps(props))
  const styles = $derived(tag(variantProps))
  provideTagStyles(() => styles)
  const boxProps = $derived({ ...rest, class: [!unstyled && styles.root, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref data-slot="root" {...boxProps} />
