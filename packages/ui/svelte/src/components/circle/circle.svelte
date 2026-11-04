<script module lang="ts">
  import type { CircleProperties } from "@isbatak/panda-ds/patterns"
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type CircleProps<T extends keyof SvelteHTMLElements = "div"> = Omit<BoxProps<T>, keyof CircleProperties> & CircleProperties
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { circle } from "@isbatak/panda-ds/patterns"

  import { Box } from "../box"

  let { ref = $bindable(), ...props }: CircleProps<T> = $props()
  const [patternProps, rest] = $derived(splitProps(props, circle.propKeys))
</script>

<Box bind:ref {...circle.raw(patternProps)} {...rest} />
