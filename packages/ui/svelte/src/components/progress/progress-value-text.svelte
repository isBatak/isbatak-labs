<script module lang="ts">
  import { Progress } from "@ark-ui/svelte/progress"

  export type ProgressValueTextProps = Progress.ValueTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useProgressStyles } from "./progress-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ProgressValueTextProps = $props()
  const styles = useProgressStyles()
</script>

<Progress.ValueText bind:ref {...props} data-slot="valueText" class={[!unstyled && styles().valueText, className]} />
