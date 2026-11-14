<script module lang="ts">
  import type { StackProps } from "../stack"
  import type { SkeletonProps } from "./skeleton.svelte"

  export type SkeletonTextProps = SkeletonProps & {
    /**
     * The number of lines to render. The last line is shorter.
     * @default 3
     */
    noOfLines?: number | undefined
    /**
     * Props for the stack that wraps the lines.
     */
    rootProps?: StackProps | undefined
  }
</script>

<script lang="ts">
  import { Stack } from "../stack"
  import Skeleton from "./skeleton.svelte"

  let { ref = $bindable(), noOfLines = 3, rootProps, ...props }: SkeletonTextProps = $props()
  const lines = $derived(Array.from({ length: noOfLines }, (_, index) => index))
</script>

<Stack gap="0" width="full" {...rootProps}>
  {#each lines as line (line)}
    <Skeleton {...props} _last={{ maxW: noOfLines === 1 ? "full" : "[80%]" }} />
  {/each}
</Stack>
