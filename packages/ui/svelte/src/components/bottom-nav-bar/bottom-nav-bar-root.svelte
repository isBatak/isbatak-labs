<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type BottomNavBarRootProps<T extends keyof SvelteHTMLElements = "nav"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'nav'">
  import { bottomNavBar } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"
  import { provideBottomNavBarStyles } from "./bottom-nav-bar-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: BottomNavBarRootProps<T> = $props()
  const styles = $derived(bottomNavBar())
  provideBottomNavBarStyles(() => styles)
  const boxProps = $derived({ ...props, class: [!unstyled && styles.root, className] } as Record<string, unknown>)
</script>

<Box as="nav" bind:ref data-slot="root" {...boxProps} />
