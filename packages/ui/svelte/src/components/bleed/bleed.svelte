<script module lang="ts">
  import type { BleedProperties } from "@isbatak/panda-ds/patterns"
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type BleedProps<T extends keyof SvelteHTMLElements = "div"> = Omit<BoxProps<T>, keyof BleedProperties> & BleedProperties
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { splitProps } from "@isbatak/panda-ds/helpers"
  import { bleed } from "@isbatak/panda-ds/patterns"

  import { Box } from "../box"

  let { ref = $bindable(), ...props }: BleedProps<T> = $props()
  const [patternProps, rest] = $derived(splitProps(props, bleed.propKeys))
</script>

<Box bind:ref {...bleed.raw(patternProps)} {...rest} />
