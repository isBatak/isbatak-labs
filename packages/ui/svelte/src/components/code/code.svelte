<script module lang="ts">
  import type { CodeVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type CodeProps<T extends keyof SvelteHTMLElements = "code"> = BoxProps<T> & CodeVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'code'">
  import { code } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"

  let { ref = $bindable(), unstyled, class: className, ...props }: CodeProps<T> = $props()
  const [variantProps, rest] = $derived(code.splitVariantProps(props))
  const boxProps = $derived({ ...rest, class: [!unstyled && code(variantProps), className] } as Record<string, unknown>)
</script>

<Box as="code" bind:ref {...boxProps} />
