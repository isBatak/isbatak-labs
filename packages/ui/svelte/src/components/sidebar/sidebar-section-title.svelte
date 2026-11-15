<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type SidebarSectionTitleProps<T extends keyof SvelteHTMLElements = "h3"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'h3'">
  import { Box } from "../box"
  import { useSidebarStyles } from "./sidebar-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: SidebarSectionTitleProps<T> = $props()
  const styles = useSidebarStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().sectionTitle, className] } as Record<string, unknown>)
</script>

<Box as="h3" bind:ref data-slot="sectionTitle" {...boxProps} />
