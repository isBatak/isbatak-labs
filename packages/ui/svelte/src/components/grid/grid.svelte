<script module lang="ts">
  import type { GridProperties } from "@isbatak/panda-ds/patterns"
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type GridProps<T extends keyof SvelteHTMLElements = "div"> = Omit<BoxProps<T>, keyof GridProperties> & GridProperties
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { grid } from "@isbatak/panda-ds/patterns"

  import { Box } from "../box"

  let { ref = $bindable(), ...props }: GridProps<T> = $props()
  const [patternProps, rest] = $derived(splitProps(props, grid.propKeys))
</script>

<Box bind:ref {...grid.raw(patternProps)} {...rest} />
