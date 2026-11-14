<script module lang="ts">
  import { Progress } from "@ark-ui/svelte/progress"

  export type ProgressCircleRangeProps = Progress.CircleRangeProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useProgressCircleStyles } from "./progress-circle-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ProgressCircleRangeProps = $props()
  const styles = useProgressCircleStyles()
</script>

<Progress.CircleRange bind:ref {...props} data-slot="circleRange" class={[!unstyled && styles().circleRange, className]} />
