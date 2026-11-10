<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface StepsDescriptionProps extends HTMLAttributes<HTMLDivElement> {
    unstyled?: boolean | undefined
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { useStepsStyles } from "./steps-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: StepsDescriptionProps = $props()
  const styles = useStepsStyles()
</script>

<div bind:this={ref} {...props} data-slot="description" class={[!unstyled && styles().description, className]}>
  {@render children?.()}
</div>
