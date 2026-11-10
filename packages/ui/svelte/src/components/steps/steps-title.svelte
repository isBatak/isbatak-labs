<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface StepsTitleProps extends HTMLAttributes<HTMLDivElement> {
    unstyled?: boolean | undefined
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { useStepsStyles } from "./steps-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: StepsTitleProps = $props()
  const styles = useStepsStyles()
</script>

<div bind:this={ref} {...props} data-slot="title" class={[!unstyled && styles().title, className]}>
  {@render children?.()}
</div>
