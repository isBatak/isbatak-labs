<script module lang="ts">
  import type { SkeletonVariantProps } from "@isbatak/panda-ds/recipes"

  import type { BoxProps } from "../box"

  export type SkeletonProps = BoxProps<"div"> & SkeletonVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { skeleton } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"

  let { ref = $bindable(), unstyled, class: className, children, ...props }: SkeletonProps = $props()
  const [variantProps, rest] = $derived(skeleton.splitVariantProps(props))
</script>

<Box bind:ref class={[!unstyled && skeleton(variantProps), className]} {...rest}>
  {@render children?.()}
</Box>
