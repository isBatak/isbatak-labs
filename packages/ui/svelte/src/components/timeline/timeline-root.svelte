<script module lang="ts">
  import type { TimelineVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type TimelineRootProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & TimelineVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { timeline } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"
  import { provideTimelineStyles } from "./timeline-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: TimelineRootProps<T> = $props()
  const [variantProps, rest] = $derived(timeline.splitVariantProps(props))
  const styles = $derived(timeline(variantProps))
  provideTimelineStyles(() => styles)
  const boxProps = $derived({ ...rest, class: [!unstyled && styles.root, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref data-slot="root" {...boxProps} />
