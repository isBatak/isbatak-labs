<script module lang="ts">
  import type { ContainerVariantProps } from "@isbatak/panda-ds/recipes"

  import type { BoxProps } from "../box"

  export type ContainerProps = BoxProps & ContainerVariantProps
</script>

<script lang="ts">
  import { container } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"

  let { ref = $bindable(), class: className, centerContent, fluid, ...rest }: ContainerProps = $props()
  const boxProps = $derived({ ...rest, class: [container({ centerContent, fluid }), className] } as Record<string, unknown>)
</script>

<Box bind:ref {...boxProps} />
