<script module lang="ts">
  import type { VstackProperties } from "@isbatak/panda-ds/patterns"
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type VStackProps<T extends keyof SvelteHTMLElements = "div"> = Omit<BoxProps<T>, keyof VstackProperties> & VstackProperties
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { vstack } from "@isbatak/panda-ds/patterns"

  import { Box } from "../box"

  let { ref = $bindable(), ...props }: VStackProps<T> = $props()
  const [patternProps, rest] = $derived(splitProps(props, vstack.propKeys))
</script>

<Box bind:ref {...vstack.raw(patternProps)} {...rest} />
