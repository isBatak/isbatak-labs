<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type QuoteProps<T extends keyof SvelteHTMLElements = "q"> = BoxProps<T>
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'q'">
  import { css } from "@isbatak/panda-ds/css"

  import { Box } from "../box"

  let { ref = $bindable(), class: className, ...props }: QuoteProps<T> = $props()
  const boxProps = $derived({ ...props, class: [css({ fontWeight: "bold", lineHeight: "shorter" }), className] } as Record<string, unknown>)
</script>

<Box as="q" bind:ref {...boxProps} />
