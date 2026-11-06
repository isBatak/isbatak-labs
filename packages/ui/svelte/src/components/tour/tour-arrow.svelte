<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourArrowProps = Tour.ArrowProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TourArrowProps = $props()
  const styles = useTourStyles()
</script>

<Tour.Arrow bind:ref {...props} data-slot="arrow" class={[!unstyled && styles().arrow, className]} />
