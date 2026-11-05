<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export type CheckboxCardContentProps = HTMLAttributes<HTMLDivElement>
</script>

<script lang="ts">
  import { useCheckboxCardStyles } from "./checkbox-card-styles"

  let { class: className, children, ...props }: CheckboxCardContentProps = $props()
  const styles = useCheckboxCardStyles()
</script>

<div {...props} data-slot="content" class={[styles().content, className]}>{@render children?.()}</div>
