<script module lang="ts">
  import { Progress } from "@ark-ui/svelte/progress"

  export type ProgressCircleLabelProps = Progress.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useProgressCircleStyles } from "./progress-circle-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ProgressCircleLabelProps = $props()
  const styles = useProgressCircleStyles()
</script>

<Progress.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
