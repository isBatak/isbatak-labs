<script module lang="ts">
  import type { ListVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type ListRootProps<T extends keyof SvelteHTMLElements = "ul"> = BoxProps<T> & ListVariantProps
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'ul'">
  import { list } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"
  import { provideListStyles } from "./list-styles"

  let { ref = $bindable(), class: className, ...props }: ListRootProps<T> = $props()
  const [variantProps, rest] = $derived(list.splitVariantProps(props))
  const styles = $derived(list(variantProps))
  provideListStyles(() => styles)
  const boxProps = $derived({ ...rest, class: [styles.root, className] } as Record<string, unknown>)
</script>

<Box as="ul" bind:ref role="list" {...boxProps} />
