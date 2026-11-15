<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type SidebarSectionProps<T extends keyof SvelteHTMLElements = "section"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'section'">
  import { Box } from "../box"
  import { useSidebarStyles } from "./sidebar-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: SidebarSectionProps<T> = $props()
  const styles = useSidebarStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().section, className] } as Record<string, unknown>)
</script>

<Box as="section" bind:ref data-slot="section" {...boxProps} />
