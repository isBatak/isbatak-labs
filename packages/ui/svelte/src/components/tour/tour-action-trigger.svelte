<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourActionTriggerProps = Tour.ActionTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TourActionTriggerProps = $props()
  const styles = useTourStyles()
</script>

<Tour.ActionTrigger bind:ref {...props} data-slot="actionTrigger" class={[!unstyled && styles().actionTrigger, className]} />
