<script module lang="ts">
  import type { CardVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type CardRootProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & CardVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { card } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"
  import { provideCardStyles } from "./card-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: CardRootProps<T> = $props()
  const [variantProps, rest] = $derived(card.splitVariantProps(props))
  const styles = $derived(card(variantProps))
  provideCardStyles(() => styles)
  const boxProps = $derived({ ...rest, class: [!unstyled && styles.root, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref data-slot="root" {...boxProps} />
