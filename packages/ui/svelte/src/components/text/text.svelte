<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type TextProps<T extends keyof SvelteHTMLElements = "p"> = BoxProps<T>
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'p'">
  import { Box } from "../box"

  let { ref = $bindable(), class: className, ...props }: TextProps<T> = $props()
  const boxProps = $derived({ ...props, class: [className] } as Record<string, unknown>)
</script>

<Box as="p" bind:ref {...boxProps} />
