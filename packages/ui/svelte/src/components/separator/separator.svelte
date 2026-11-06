<script module lang="ts">
  import type { SeparatorVariantProps } from "@isbatak/panda-ds/recipes"

  import type { BoxProps } from "../box"

  export type SeparatorProps = BoxProps<"span"> & SeparatorVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { separator } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"

  let { ref = $bindable(), unstyled, class: className, orientation = "horizontal", ...props }: SeparatorProps = $props()
  const [variantProps, rest] = $derived(separator.splitVariantProps(props))
  const fixed = $derived(typeof orientation === "string")
</script>

<Box
  as="span"
  bind:ref
  role={fixed ? "separator" : "presentation"}
  aria-orientation={fixed ? (orientation as "horizontal" | "vertical") : undefined}
  class={[!unstyled && separator({ ...variantProps, orientation }), className]}
  {...rest}
/>
