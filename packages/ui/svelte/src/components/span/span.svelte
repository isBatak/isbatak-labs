<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type SpanProps<T extends keyof SvelteHTMLElements = "span"> = BoxProps<T>
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'span'">
  import { Box } from "../box"

  let { ref = $bindable(), class: className, ...props }: SpanProps<T> = $props()
  const boxProps = $derived({ ...props, class: [className] } as Record<string, unknown>)
</script>

<Box as="span" bind:ref {...boxProps} />
