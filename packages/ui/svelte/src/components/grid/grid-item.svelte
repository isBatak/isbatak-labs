<script module lang="ts">
  import type { GridItemProperties } from "@isbatak/panda-ds/patterns"
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type GridItemProps<T extends keyof SvelteHTMLElements = "div"> = Omit<BoxProps<T>, keyof GridItemProperties> & GridItemProperties
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { gridItem } from "@isbatak/panda-ds/patterns"

  import { Box } from "../box"

  let { ref = $bindable(), ...props }: GridItemProps<T> = $props()
  const [patternProps, rest] = $derived(splitProps(props, gridItem.propKeys))
</script>

<Box bind:ref {...gridItem.raw(patternProps)} {...rest} />
