<script module lang="ts">
  import type { Snippet } from "svelte"
  import type { HTMLAttributes } from "svelte/elements"

  export interface StartIconProps extends HTMLAttributes<HTMLSpanElement> {
    asChild?: Snippet<[(props?: Record<string, unknown>) => Record<string, unknown>]>
  }
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"

  let { children, ...props }: StartIconProps = $props()
</script>

<Ark as="span" data-icon-start="" aria-hidden="true" {...props}>{@render children?.()}</Ark>
