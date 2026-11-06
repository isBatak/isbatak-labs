<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourArrowTipProps = Tour.ArrowTipProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TourArrowTipProps = $props()
  const styles = useTourStyles()
</script>

<Tour.ArrowTip bind:ref {...props} data-slot="arrowTip" class={[!unstyled && styles().arrowTip, className]} />
