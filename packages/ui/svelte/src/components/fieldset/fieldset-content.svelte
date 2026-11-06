<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export type FieldsetContentProps = HTMLAttributes<HTMLDivElement> & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFieldsetStyles } from "./fieldset-styles"

  let { unstyled, class: className, children, ...props }: FieldsetContentProps = $props()
  const styles = useFieldsetStyles()
</script>

<div {...props} data-slot="content" class={[!unstyled && styles().content, className]}>{@render children?.()}</div>
