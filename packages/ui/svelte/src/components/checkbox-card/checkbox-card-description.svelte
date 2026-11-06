<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export type CheckboxCardDescriptionProps = HTMLAttributes<HTMLDivElement> & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCheckboxCardStyles } from "./checkbox-card-styles"

  let { unstyled, class: className, children, ...props }: CheckboxCardDescriptionProps = $props()
  const styles = useCheckboxCardStyles()
</script>

<div {...props} data-slot="description" class={[!unstyled && styles().description, className]}>{@render children?.()}</div>
