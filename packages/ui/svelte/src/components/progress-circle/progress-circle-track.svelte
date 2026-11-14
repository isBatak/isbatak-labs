<script module lang="ts">
  import { Progress } from "@ark-ui/svelte/progress"

  export type ProgressCircleTrackProps = Progress.CircleTrackProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useProgressCircleStyles } from "./progress-circle-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ProgressCircleTrackProps = $props()
  const styles = useProgressCircleStyles()
</script>

<Progress.CircleTrack bind:ref {...props} data-slot="circleTrack" class={[!unstyled && styles().circleTrack, className]} />
