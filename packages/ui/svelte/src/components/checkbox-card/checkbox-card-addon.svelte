<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export type CheckboxCardAddonProps = HTMLAttributes<HTMLDivElement>
</script>

<script lang="ts">
  import { useCheckboxCardStyles } from "./checkbox-card-styles"

  let { class: className, children, ...props }: CheckboxCardAddonProps = $props()
  const styles = useCheckboxCardStyles()
</script>

<div {...props} data-slot="addon" class={[styles().addon, className]}>{@render children?.()}</div>
