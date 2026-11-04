<script module lang="ts">
  import type { FloatProperties } from "@isbatak/panda-ds/patterns"
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type FloatProps<T extends keyof SvelteHTMLElements = "div"> = Omit<BoxProps<T>, keyof FloatProperties> & FloatProperties
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { float } from "@isbatak/panda-ds/patterns"

  import { Box } from "../box"

  let { ref = $bindable(), ...props }: FloatProps<T> = $props()
  const [patternProps, rest] = $derived(splitProps(props, float.propKeys))
</script>

<Box bind:ref {...float.raw(patternProps)} {...rest} />
