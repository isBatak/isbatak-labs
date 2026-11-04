<script module lang="ts">
  import type { HstackProperties } from "@isbatak/panda-ds/patterns"
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type HStackProps<T extends keyof SvelteHTMLElements = "div"> = Omit<BoxProps<T>, keyof HstackProperties> & HstackProperties
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { hstack } from "@isbatak/panda-ds/patterns"

  import { Box } from "../box"

  let { ref = $bindable(), ...props }: HStackProps<T> = $props()
  const [patternProps, rest] = $derived(splitProps(props, hstack.propKeys))
</script>

<Box bind:ref {...hstack.raw(patternProps)} {...rest} />
