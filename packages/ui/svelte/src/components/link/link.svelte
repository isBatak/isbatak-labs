<script module lang="ts">
  import type { LinkVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type LinkProps<T extends keyof SvelteHTMLElements = "a"> = BoxProps<T> & LinkVariantProps
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'a'">
  import { link } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"

  let { ref = $bindable(), class: className, ...props }: LinkProps<T> = $props()
  const [variantProps, rest] = $derived(link.splitVariantProps(props))
  const boxProps = $derived({ ...rest, class: [link(variantProps), className] } as Record<string, unknown>)
</script>

<Box as="a" bind:ref {...boxProps} />
