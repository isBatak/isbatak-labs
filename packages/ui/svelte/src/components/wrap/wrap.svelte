<script module lang="ts">
  import type { WrapProperties } from "@isbatak/panda-ds/patterns"
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type WrapProps<T extends keyof SvelteHTMLElements = "div"> = Omit<BoxProps<T>, keyof WrapProperties> & WrapProperties
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { wrap } from "@isbatak/panda-ds/patterns"

  import { Box } from "../box"

  let { ref = $bindable(), ...props }: WrapProps<T> = $props()
  const [patternProps, rest] = $derived(splitProps(props, wrap.propKeys))
</script>

<Box bind:ref {...wrap.raw(patternProps)} {...rest} />
