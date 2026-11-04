<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type VisuallyHiddenProps<T extends keyof SvelteHTMLElements = "span"> = BoxProps<T>
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'span'">
  import { visuallyHidden } from "@isbatak/panda-ds/patterns"

  import { Box } from "../box"

  let { ref = $bindable(), class: className, ...props }: VisuallyHiddenProps<T> = $props()
  const boxProps = $derived({ ...props, class: [visuallyHidden(), className] } as Record<string, unknown>)
</script>

<Box as="span" bind:ref {...boxProps} />
