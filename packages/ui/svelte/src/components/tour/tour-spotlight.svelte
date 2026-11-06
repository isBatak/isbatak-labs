<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourSpotlightProps = Tour.SpotlightProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TourSpotlightProps = $props()
  const styles = useTourStyles()
</script>

<Tour.Spotlight bind:ref {...props} data-slot="spotlight" class={[!unstyled && styles().spotlight, className]} />
