<script module lang="ts">
  import type { SVGAttributes } from "svelte/elements"

  export type CheckboxIndicatorProps = SVGAttributes<SVGSVGElement>
</script>

<script lang="ts">
  import { useCheckboxContext } from "@ark-ui/svelte/checkbox"
  import { useCheckboxStyles } from "./checkbox-styles"

  let { class: className, ...props }: CheckboxIndicatorProps = $props()
  const api = useCheckboxContext()
  const styles = useCheckboxStyles()
</script>

<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" {...props} data-slot="indicator" class={[styles().indicator, className]}>
  {#if api().indeterminate}
    <path d="M5 12h14" />
  {:else if api().checked}
    <polyline points="20 6 9 17 4 12" />
  {/if}
</svg>
