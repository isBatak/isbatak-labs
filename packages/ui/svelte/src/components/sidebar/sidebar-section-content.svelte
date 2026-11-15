<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type SidebarSectionContentProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { Box } from "../box"
  import { useSidebarStyles } from "./sidebar-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: SidebarSectionContentProps<T> = $props()
  const styles = useSidebarStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().sectionContent, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref data-slot="sectionContent" {...boxProps} />
