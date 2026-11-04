<script module lang="ts">
  import type { FlexProperties } from "@isbatak/panda-ds/patterns"
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type FlexProps<T extends keyof SvelteHTMLElements = "div"> = Omit<BoxProps<T>, keyof FlexProperties> & FlexProperties
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { flex } from "@isbatak/panda-ds/patterns"

  import { Box } from "../box"

  let { ref = $bindable(), ...props }: FlexProps<T> = $props()
  const [patternProps, rest] = $derived(splitProps(props, flex.propKeys))
</script>

<Box bind:ref {...flex.raw(patternProps)} {...rest} />
