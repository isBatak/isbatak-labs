<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourBackdropProps = Tour.BackdropProps
</script>

<script lang="ts">
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), class: className, ...props }: TourBackdropProps = $props()
  const styles = useTourStyles()
</script>

<Tour.Backdrop bind:ref {...props} data-slot="backdrop" class={[styles().backdrop, className]} />
