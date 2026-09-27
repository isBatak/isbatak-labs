<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourDescriptionProps = Tour.DescriptionProps
</script>

<script lang="ts">
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), class: className, ...props }: TourDescriptionProps = $props()
  const styles = useTourStyles()
</script>

<Tour.Description bind:ref {...props} data-slot="description" class={[styles().description, className]} />
