<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type TimelineContentProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { Box } from "../box"
  import { useTimelineStyles } from "./timeline-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: TimelineContentProps<T> = $props()
  const styles = useTimelineStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().content, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref data-slot="content" {...boxProps} />
