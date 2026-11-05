<script module lang="ts">
  import type { CheckmarkVariantProps } from "@isbatak/panda-ds/recipes"
  import type { SVGAttributes } from "svelte/elements"

  export interface CheckmarkProps extends SVGAttributes<SVGSVGElement>, CheckmarkVariantProps {
    checked?: boolean | undefined
    indeterminate?: boolean | undefined
    disabled?: boolean | undefined
  }
</script>

<script lang="ts">
  import { checkmark } from "@isbatak/panda-ds/recipes"

  let { checked, indeterminate, disabled, class: className, ...props }: CheckmarkProps = $props()
  const [variantProps, localProps] = $derived(checkmark.splitVariantProps(props))
</script>

<svg
  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round"
  data-state={indeterminate ? "indeterminate" : checked ? "checked" : "unchecked"}
  data-disabled={disabled ? "" : undefined}
  {...localProps}
  class={[checkmark(variantProps), className]}
>
  {#if indeterminate}
    <path d="M5 12h14" />
  {:else if checked}
    <polyline points="20 6 9 17 4 12" />
  {/if}
</svg>
