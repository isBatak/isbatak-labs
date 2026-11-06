<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourCloseTriggerProps = Tour.CloseTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TourCloseTriggerProps = $props()
  const styles = useTourStyles()
</script>

<Tour.CloseTrigger bind:ref {...props} data-slot="closeTrigger" class={[!unstyled && styles().closeTrigger, className]} />
