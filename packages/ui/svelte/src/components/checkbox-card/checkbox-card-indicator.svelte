<script module lang="ts">
  import type { SVGAttributes } from "svelte/elements"

  export type CheckboxCardIndicatorProps = SVGAttributes<SVGSVGElement> & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCheckboxContext } from "@ark-ui/svelte/checkbox"
  import { useCheckboxCardStyles } from "./checkbox-card-styles"

  let { unstyled, class: className, ...props }: CheckboxCardIndicatorProps = $props()
  const api = useCheckboxContext()
  const styles = useCheckboxCardStyles()
</script>

<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-state={api().indeterminate ? "indeterminate" : api().checked ? "checked" : "unchecked"} data-disabled={api().disabled ? "" : undefined} {...props} data-slot="indicator" class={[!unstyled && styles().indicator, className]}>
  {#if api().indeterminate}
    <path d="M5 12h14" />
  {:else if api().checked}
    <polyline points="20 6 9 17 4 12" />
  {/if}
</svg>
