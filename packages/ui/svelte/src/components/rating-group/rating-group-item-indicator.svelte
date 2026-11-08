<script module lang="ts">
  import type { Snippet } from "svelte"
  import type { HTMLAttributes } from "svelte/elements"

  export type RatingGroupIconProps = { "data-bg"?: "" | undefined; "data-fg"?: "" | undefined }

  export interface RatingGroupItemIndicatorProps extends HTMLAttributes<HTMLSpanElement> {
    ref?: HTMLSpanElement | null
    unstyled?: boolean | undefined
    icon?: Snippet<[RatingGroupIconProps]> | undefined
  }
</script>

<script lang="ts">
  import { useRatingGroupItemContext } from "@ark-ui/svelte/rating-group"

  import { Icon } from "../icon"
  import { useRatingGroupStyles } from "./rating-group-styles"

  let { ref = $bindable(null), unstyled, class: className, icon, ...props }: RatingGroupItemIndicatorProps = $props()
  const styles = useRatingGroupStyles()
  const item = useRatingGroupItemContext()
</script>

{#snippet layer(attrs: RatingGroupIconProps)}
  {#if icon}{@render icon(attrs)}{:else}<Icon name="star-filled" {...attrs} />{/if}
{/snippet}

<span
  bind:this={ref}
  data-highlighted={item().highlighted ? "" : undefined}
  data-checked={item().checked ? "" : undefined}
  data-half={item().half ? "" : undefined}
  {...props}
  data-slot="itemIndicator"
  class={[!unstyled && styles().itemIndicator, className]}
>
  {@render layer({ "data-bg": "" })}
  {@render layer({ "data-fg": "" })}
</span>
