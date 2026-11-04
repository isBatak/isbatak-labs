<script module lang="ts">
  import type { SpacerProperties } from "@isbatak/panda-ds/patterns"
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type SpacerProps<T extends keyof SvelteHTMLElements = "div"> = Omit<BoxProps<T>, keyof SpacerProperties> & SpacerProperties
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { spacer } from "@isbatak/panda-ds/patterns"

  import { Box } from "../box"

  let { ref = $bindable(), ...props }: SpacerProps<T> = $props()
  const [patternProps, rest] = $derived(splitProps(props, spacer.propKeys))
</script>

<Box bind:ref {...spacer.raw(patternProps)} {...rest} />
