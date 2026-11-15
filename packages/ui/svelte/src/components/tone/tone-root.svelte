<script module lang="ts">
  import type { ToneVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type ToneRootProps<T extends keyof SvelteHTMLElements = "span"> = BoxProps<T> &
    ToneVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'span'">
  import { tone } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"
  import { provideToneContext, provideToneStyles } from "./tone-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: ToneRootProps<T> = $props()
  const [variantProps, rest] = $derived(tone.splitVariantProps(props))
  const styles = $derived(tone(variantProps))
  const value = $derived(typeof variantProps.tone === "string" ? variantProps.tone : "neutral")
  provideToneStyles(() => styles)
  provideToneContext(() => value)
  const boxProps = $derived({ ...rest, class: [!unstyled && styles.root, className] } as Record<string, unknown>)
</script>

<Box as="span" bind:ref data-slot="root" data-tone={value} {...boxProps} />
