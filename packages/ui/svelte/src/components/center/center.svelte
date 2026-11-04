<script module lang="ts">
  import type { CenterProperties } from "@isbatak/panda-ds/patterns"
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type CenterProps<T extends keyof SvelteHTMLElements = "div"> = Omit<BoxProps<T>, keyof CenterProperties> & CenterProperties
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { center } from "@isbatak/panda-ds/patterns"

  import { Box } from "../box"

  let { ref = $bindable(), ...props }: CenterProps<T> = $props()
  const [patternProps, rest] = $derived(splitProps(props, center.propKeys))
</script>

<Box bind:ref {...center.raw(patternProps)} {...rest} />
