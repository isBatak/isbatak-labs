<script module lang="ts">
  import type { Snippet } from "svelte"
  import type { HTMLAttributes } from "svelte/elements"

  export interface StartIconProps extends HTMLAttributes<HTMLSpanElement> {
    asChild?: Snippet<[(props?: Record<string, unknown>) => Record<string, unknown>]>
    /**
     * Extra pull toward the edge, added to the recipe's own, as a CSS length such as `"0.4px"` or `"0.18em"`. Use it
     * to land a single icon on its ink; a negative length pulls less.
     */
    offset?: string | undefined
  }
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"

  let { children, offset, style, ...props }: StartIconProps = $props()
</script>

<Ark
  as="span"
  data-icon-start=""
  aria-hidden="true"
  style={offset ? `--icon-offset: ${offset};${style ?? ""}` : style}
  {...props}>{@render children?.()}</Ark
>
