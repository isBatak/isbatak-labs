<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface LoaderOverlayProps extends HTMLAttributes<HTMLDivElement> {
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { css } from "@isbatak/panda-ds/css"

  let { ref = $bindable(null), class: className, children, ...props }: LoaderOverlayProps = $props()
</script>

<div
  bind:this={ref}
  {...props}
  class={[
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
