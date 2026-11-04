<script module lang="ts">
  import type { FloatGapProperties } from "@isbatak/panda-ds/patterns"
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type FloatGapProps<T extends keyof SvelteHTMLElements = "span"> = Omit<BoxProps<T>, keyof FloatGapProperties> & FloatGapProperties
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'span'">
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { floatGap } from "@isbatak/panda-ds/patterns"

  import { Box } from "../box"

  let { ref = $bindable(), ...props }: FloatGapProps<T> = $props()
  const [patternProps, rest] = $derived(splitProps(props, floatGap.propKeys))
</script>

<Box as="span" bind:ref {...floatGap.raw(patternProps)} {...rest} />
