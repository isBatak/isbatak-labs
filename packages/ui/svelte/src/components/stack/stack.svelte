<script module lang="ts">
  import type { StackProperties } from "@isbatak/panda-ds/patterns"
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type StackProps<T extends keyof SvelteHTMLElements = "div"> = Omit<BoxProps<T>, keyof StackProperties> & StackProperties
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { stack } from "@isbatak/panda-ds/patterns"

  import { Box } from "../box"

  let { ref = $bindable(), ...props }: StackProps<T> = $props()
  const [patternProps, rest] = $derived(splitProps(props, stack.propKeys))
</script>

<Box bind:ref {...stack.raw(patternProps)} {...rest} />
