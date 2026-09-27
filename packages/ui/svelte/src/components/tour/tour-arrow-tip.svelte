<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourArrowTipProps = Tour.ArrowTipProps
</script>

<script lang="ts">
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), class: className, ...props }: TourArrowTipProps = $props()
  const styles = useTourStyles()
</script>

<Tour.ArrowTip bind:ref {...props} data-slot="arrowTip" class={[styles().arrowTip, className]} />
