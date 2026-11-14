<script module lang="ts">
  import { Progress } from "@ark-ui/svelte/progress"

  export type ProgressCircleCircleProps = Progress.CircleProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useProgressCircleStyles } from "./progress-circle-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ProgressCircleCircleProps = $props()
  const styles = useProgressCircleStyles()
</script>

<Progress.Circle bind:ref {...props} data-slot="circle" class={[!unstyled && styles().circle, className]} />
