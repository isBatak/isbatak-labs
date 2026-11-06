<script module lang="ts">
  import type { StrongVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type StrongProps<T extends keyof SvelteHTMLElements = "strong"> = BoxProps<T> & StrongVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'strong'">
  import { strong } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"

  let { ref = $bindable(), unstyled, class: className, ...props }: StrongProps<T> = $props()
  const [variantProps, rest] = $derived(strong.splitVariantProps(props))
  const boxProps = $derived({ ...rest, class: [!unstyled && strong(variantProps), className] } as Record<string, unknown>)
</script>

<Box as="strong" bind:ref {...boxProps} />
