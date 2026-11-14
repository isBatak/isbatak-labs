<script module lang="ts">
  import { Progress } from "@ark-ui/svelte/progress"

  export type ProgressTrackProps = Progress.TrackProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useProgressStyles } from "./progress-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ProgressTrackProps = $props()
  const styles = useProgressStyles()
</script>

<Progress.Track bind:ref {...props} data-slot="track" class={[!unstyled && styles().track, className]} />
