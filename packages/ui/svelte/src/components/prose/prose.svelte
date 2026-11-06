<script module lang="ts">
  import type { ProseVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type ProseProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & ProseVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { prose } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"

  let { ref = $bindable(), unstyled, class: className, ...props }: ProseProps<T> = $props()
  const [variantProps, rest] = $derived(prose.splitVariantProps(props))
  const boxProps = $derived({ ...rest, class: [!unstyled && prose(variantProps), className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref {...boxProps} />
