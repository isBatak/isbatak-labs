<script module lang="ts">
  import type { MarkVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type MarkProps<T extends keyof SvelteHTMLElements = "mark"> = BoxProps<T> & MarkVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'mark'">
  import { mark } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"

  let { ref = $bindable(), unstyled, class: className, ...props }: MarkProps<T> = $props()
  const [variantProps, rest] = $derived(mark.splitVariantProps(props))
  const boxProps = $derived({ ...rest, class: [!unstyled && mark(variantProps), className] } as Record<string, unknown>)
</script>

<Box as="mark" bind:ref {...boxProps} />
