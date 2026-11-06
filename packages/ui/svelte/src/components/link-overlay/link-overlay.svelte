<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type LinkOverlayProps<T extends keyof SvelteHTMLElements = "a"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'a'">
  import { linkOverlay } from "@isbatak/panda-ds/patterns"

  import { Box } from "../box"

  let { ref = $bindable(), unstyled, class: className, ...props }: LinkOverlayProps<T> = $props()
  const boxProps = $derived({ ...props, class: [!unstyled && linkOverlay(), className] } as Record<string, unknown>)
</script>

<Box as="a" bind:ref data-link-overlay="" {...boxProps} />
