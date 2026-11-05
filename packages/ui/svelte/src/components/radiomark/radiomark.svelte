<script module lang="ts">
  import type { RadiomarkVariantProps } from "@isbatak/panda-ds/recipes"
  import type { HTMLAttributes } from "svelte/elements"

  export interface RadiomarkProps extends HTMLAttributes<HTMLSpanElement>, RadiomarkVariantProps {
    checked?: boolean | undefined
    disabled?: boolean | undefined
  }
</script>

<script lang="ts">
  import { radiomark } from "@isbatak/panda-ds/recipes"

  let { checked, disabled, class: className, ...props }: RadiomarkProps = $props()
  const [variantProps, localProps] = $derived(radiomark.splitVariantProps(props))
</script>

<span
  data-state={checked ? "checked" : "unchecked"}
  data-disabled={disabled ? "" : undefined}
  {...localProps}
  class={[radiomark(variantProps), className]}
>
  {#if checked}<span class="dot"></span>{/if}
</span>
