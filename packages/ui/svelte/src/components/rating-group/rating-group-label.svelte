<script module lang="ts">
  import { RatingGroup } from "@ark-ui/svelte/rating-group"

  export type RatingGroupLabelProps = RatingGroup.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useRatingGroupStyles } from "./rating-group-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: RatingGroupLabelProps = $props()
  const styles = useRatingGroupStyles()
</script>

<RatingGroup.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
