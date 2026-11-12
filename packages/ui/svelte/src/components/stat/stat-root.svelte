<script module lang="ts">
  import type { StatVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type StatRootProps<T extends keyof SvelteHTMLElements = "dl"> = BoxProps<T> & StatVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'dl'">
  import { stat } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"
  import { hasStatProps, provideStatStyles, useStatProps } from "./stat-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: StatRootProps<T> = $props()
  const contextProps = hasStatProps() ? useStatProps() : undefined
  const [variantProps, rest] = $derived(stat.splitVariantProps({ ...contextProps?.(), ...props }))
  const styles = $derived(stat(variantProps))
  provideStatStyles(() => styles)
  const boxProps = $derived({ ...rest, class: [!unstyled && styles.root, className] } as Record<string, unknown>)
</script>

<Box as="dl" bind:ref data-slot="root" {...boxProps} />
