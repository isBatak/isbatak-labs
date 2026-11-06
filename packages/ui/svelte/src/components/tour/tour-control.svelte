<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourControlProps = Tour.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TourControlProps = $props()
  const styles = useTourStyles()
</script>

<Tour.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
