<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type LinkBoxProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { css } from "@isbatak/panda-ds/css"

  import { Box } from "../box"

  let { ref = $bindable(), unstyled, class: className, ...props }: LinkBoxProps<T> = $props()
  const boxProps = $derived({ ...props, class: [!unstyled && css({ position: "relative", "& a[href]:not([data-link-overlay]), & abbr[title]": { position: "relative", zIndex: "[1]" } }), className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref {...boxProps} />
