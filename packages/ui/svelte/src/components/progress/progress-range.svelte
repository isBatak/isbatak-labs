<script module lang="ts">
  import { Progress } from "@ark-ui/svelte/progress"

  export type ProgressRangeProps = Progress.RangeProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useProgressStyles } from "./progress-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ProgressRangeProps = $props()
  const styles = useProgressStyles()
</script>

<Progress.Range bind:ref {...props} data-slot="range" class={[!unstyled && styles().range, className]} />
