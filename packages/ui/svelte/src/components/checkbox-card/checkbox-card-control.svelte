<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export type CheckboxCardControlProps = HTMLAttributes<HTMLDivElement>
</script>

<script lang="ts">
  import { useCheckboxCardStyles } from "./checkbox-card-styles"

  let { class: className, children, ...props }: CheckboxCardControlProps = $props()
  const styles = useCheckboxCardStyles()
</script>

<div {...props} data-slot="control" class={[styles().control, className]}>{@render children?.()}</div>
