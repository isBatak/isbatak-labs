<script module lang="ts">
  import type { StickyProperties } from "@isbatak/panda-ds/patterns"
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type StickyProps<T extends keyof SvelteHTMLElements = "div"> = Omit<BoxProps<T>, keyof StickyProperties> & StickyProperties
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { sticky } from "@isbatak/panda-ds/patterns"

  import { Box } from "../box"

  let { ref = $bindable(), ...props }: StickyProps<T> = $props()
  const [patternProps, rest] = $derived(splitProps(props, sticky.propKeys))
</script>

<Box bind:ref {...sticky.raw(patternProps)} {...rest} />
