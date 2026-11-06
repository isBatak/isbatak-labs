<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourProgressTextProps = Tour.ProgressTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TourProgressTextProps = $props()
  const styles = useTourStyles()
</script>

<Tour.ProgressText bind:ref {...props} data-slot="progressText" class={[!unstyled && styles().progressText, className]} />
