<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface LoaderOverlayProps extends HTMLAttributes<HTMLDivElement> {
    ref?: HTMLDivElement | null
    unstyled?: boolean | undefined
  }
</script>

<script lang="ts">
  import { css } from "@isbatak/panda-ds/css"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: LoaderOverlayProps = $props()
</script>

<div
  bind:this={ref}
  {...props}
  class={[
    !unstyled &&
      css({
        position: "absolute",
        inset: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSize: "full",
        gap: "2",
      }),
    className,
  ]}
>
  {@render children?.()}
</div>
