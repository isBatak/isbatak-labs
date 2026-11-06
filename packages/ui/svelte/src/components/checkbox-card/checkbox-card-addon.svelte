<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export type CheckboxCardAddonProps = HTMLAttributes<HTMLDivElement> & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCheckboxCardStyles } from "./checkbox-card-styles"

  let { unstyled, class: className, children, ...props }: CheckboxCardAddonProps = $props()
  const styles = useCheckboxCardStyles()
</script>

<div {...props} data-slot="addon" class={[!unstyled && styles().addon, className]}>{@render children?.()}</div>
