<script module lang="ts">
  import type { HeadingVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type HeadingProps<T extends keyof SvelteHTMLElements = "h2"> = BoxProps<T> & HeadingVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'h2'">
  import { heading } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"

  let { ref = $bindable(), unstyled, class: className, ...props }: HeadingProps<T> = $props()
  const [variantProps, rest] = $derived(heading.splitVariantProps(props))
  const boxProps = $derived({ ...rest, class: [!unstyled && heading(variantProps), className] } as Record<string, unknown>)
</script>

<Box as="h2" bind:ref {...boxProps} />
