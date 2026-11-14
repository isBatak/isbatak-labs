<script module lang="ts">
  import type { CircleProps } from "../circle"
  import type { SkeletonProps } from "./skeleton.svelte"

  export type SkeletonCircleProps = SkeletonProps & {
    /**
     * The width and height of the circle.
     */
    size?: CircleProps["size"] | undefined
  }
</script>

<script lang="ts">
  import { Circle } from "../circle"
  import Skeleton from "./skeleton.svelte"

  let { ref = $bindable(), size, children, ...props }: SkeletonCircleProps = $props()
</script>

<Circle {size}>
  <Skeleton bind:ref width="full" height="full" {...props}>
    {@render children?.()}
  </Skeleton>
</Circle>
