<script module lang="ts">
  import type { Snippet } from "svelte"

  import type { RatingGroupIconProps } from "./rating-group-item-indicator.svelte"
  import type { RatingGroupItemProps } from "./rating-group-item.svelte"

  export type RatingGroupItemsProps = Omit<RatingGroupItemProps, "index"> & {
    icon?: Snippet<[RatingGroupIconProps]> | undefined
  }
</script>

<script lang="ts">
  import { useRatingGroupContext } from "@ark-ui/svelte/rating-group"

  import RatingGroupItem from "./rating-group-item.svelte"
  import RatingGroupItemIndicator from "./rating-group-item-indicator.svelte"

  let { icon, ...props }: RatingGroupItemsProps = $props()
  const ratingGroup = useRatingGroupContext()
</script>

{#each ratingGroup().items as index (index)}
  <RatingGroupItem {index} {...props}>
    <RatingGroupItemIndicator {icon} />
  </RatingGroupItem>
{/each}
