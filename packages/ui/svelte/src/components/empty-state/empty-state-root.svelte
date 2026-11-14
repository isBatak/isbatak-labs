<script module lang="ts">
  import type { EmptyStateVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type EmptyStateRootProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & EmptyStateVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { emptyState } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"
  import { provideEmptyStateStyles } from "./empty-state-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: EmptyStateRootProps<T> = $props()
  const [variantProps, rest] = $derived(emptyState.splitVariantProps(props))
  const styles = $derived(emptyState(variantProps))
  provideEmptyStateStyles(() => styles)
  const boxProps = $derived({ ...rest, class: [!unstyled && styles.root, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref data-slot="root" {...boxProps} />
