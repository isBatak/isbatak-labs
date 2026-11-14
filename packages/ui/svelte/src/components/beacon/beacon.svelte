<script module lang="ts">
  import type { BeaconVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type BeaconProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & BeaconVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { beacon } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"
  import { hasBeaconProps, useBeaconProps } from "./beacon-props"

  let { ref = $bindable(), unstyled, class: className, ...props }: BeaconProps<T> = $props()
  const contextProps = hasBeaconProps() ? useBeaconProps() : undefined
  const [variantProps, rest] = $derived(beacon.splitVariantProps({ ...contextProps?.(), ...props }))
  const boxProps = $derived({ ...rest, class: [!unstyled && beacon(variantProps), className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref {...boxProps} />
