<script module lang="ts">
  import type { StatusVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type StatusRootProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & StatusVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { status } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"
  import { provideStatusStyles } from "./status-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: StatusRootProps<T> = $props()
  const [variantProps, rest] = $derived(status.splitVariantProps(props))
  const styles = $derived(status(variantProps))
  provideStatusStyles(() => styles)
  const boxProps = $derived({ ...rest, class: [!unstyled && styles.root, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref data-slot="root" {...boxProps} />
