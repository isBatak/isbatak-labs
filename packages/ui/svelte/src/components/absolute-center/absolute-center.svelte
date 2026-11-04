<script module lang="ts">
  import type { AbsoluteCenterProperties } from "@isbatak/panda-ds/patterns"
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type AbsoluteCenterProps<T extends keyof SvelteHTMLElements = "div"> = Omit<BoxProps<T>, keyof AbsoluteCenterProperties> & AbsoluteCenterProperties
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { absoluteCenter } from "@isbatak/panda-ds/patterns"

  import { Box } from "../box"

  let { ref = $bindable(), ...props }: AbsoluteCenterProps<T> = $props()
  const [patternProps, rest] = $derived(splitProps(props, absoluteCenter.propKeys))
</script>

<Box bind:ref {...absoluteCenter.raw(patternProps)} {...rest} />
