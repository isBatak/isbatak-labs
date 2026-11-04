<script module lang="ts">
  import type { SquareProperties } from "@isbatak/panda-ds/patterns"
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type SquareProps<T extends keyof SvelteHTMLElements = "div"> = Omit<BoxProps<T>, keyof SquareProperties> & SquareProperties
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { square } from "@isbatak/panda-ds/patterns"

  import { Box } from "../box"

  let { ref = $bindable(), ...props }: SquareProps<T> = $props()
  const [patternProps, rest] = $derived(splitProps(props, square.propKeys))
</script>

<Box bind:ref {...square.raw(patternProps)} {...rest} />
