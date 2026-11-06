<script module lang="ts">
  import type { EmVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type EmProps<T extends keyof SvelteHTMLElements = "em"> = BoxProps<T> & EmVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'em'">
  import { em } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"

  let { ref = $bindable(), unstyled, class: className, ...props }: EmProps<T> = $props()
  const [variantProps, rest] = $derived(em.splitVariantProps(props))
  const boxProps = $derived({ ...rest, class: [!unstyled && em(variantProps), className] } as Record<string, unknown>)
</script>

<Box as="em" bind:ref {...boxProps} />
