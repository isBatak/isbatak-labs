<script module lang="ts">
  import { Progress } from "@ark-ui/svelte/progress"

  export type ProgressLabelProps = Progress.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useProgressStyles } from "./progress-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ProgressLabelProps = $props()
  const styles = useProgressStyles()
</script>

<Progress.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
