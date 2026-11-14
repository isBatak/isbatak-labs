<script module lang="ts">
  import type { ActionItemVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type ActionItemRootProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> &
    ActionItemVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { actionItem } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"
  import { provideActionItemStyles } from "./action-item-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: ActionItemRootProps<T> = $props()
  const [variantProps, rest] = $derived(actionItem.splitVariantProps(props))
  const styles = $derived(actionItem(variantProps))
  provideActionItemStyles(() => styles)
  const boxProps = $derived({ ...rest, class: [!unstyled && styles.root, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref data-slot="root" {...boxProps} />
