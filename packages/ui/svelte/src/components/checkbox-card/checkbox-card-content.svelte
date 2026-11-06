<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export type CheckboxCardContentProps = HTMLAttributes<HTMLDivElement> & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCheckboxCardStyles } from "./checkbox-card-styles"

  let { unstyled, class: className, children, ...props }: CheckboxCardContentProps = $props()
  const styles = useCheckboxCardStyles()
</script>

<div {...props} data-slot="content" class={[!unstyled && styles().content, className]}>{@render children?.()}</div>
