<script module lang="ts">
  import { Progress } from "@ark-ui/svelte/progress"

  export type ProgressCircleValueTextProps = Progress.ValueTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useProgressCircleStyles } from "./progress-circle-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ProgressCircleValueTextProps = $props()
  const styles = useProgressCircleStyles()
</script>

<Progress.ValueText bind:ref {...props} data-slot="valueText" class={[!unstyled && styles().valueText, className]} />
