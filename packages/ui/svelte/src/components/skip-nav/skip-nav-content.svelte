<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type SkipNavContentProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { css } from "@isbatak/panda-ds/css"

  import { Box } from "../box"

  let { ref = $bindable(), unstyled, class: className, ...props }: SkipNavContentProps<T> = $props()
  const boxProps = $derived({ id: "skip-nav", tabindex: -1, ...props, class: [!unstyled && css({ outline: "[0]" }), className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref {...boxProps} />
