<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourArrowProps = Tour.ArrowProps
</script>

<script lang="ts">
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), class: className, ...props }: TourArrowProps = $props()
  const styles = useTourStyles()
</script>

<Tour.Arrow bind:ref {...props} data-slot="arrow" class={[styles().arrow, className]} />
