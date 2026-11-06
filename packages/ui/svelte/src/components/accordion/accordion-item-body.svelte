<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface AccordionItemBodyProps extends HTMLAttributes<HTMLDivElement> {
    unstyled?: boolean | undefined
    ref?: HTMLDivElement | null
  }
</script>

<script lang="ts">
  import { useAccordionStyles } from "./accordion-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: AccordionItemBodyProps = $props()
  const styles = useAccordionStyles()
</script>

<div bind:this={ref} {...props} data-slot="itemBody" class={[!unstyled && styles().itemBody, className]}>{@render children?.()}</div>
