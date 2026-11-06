<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export type FieldOptionalTextProps = HTMLAttributes<HTMLSpanElement> & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFieldContext } from "@ark-ui/svelte/field"
  import { useFieldStyles } from "./field-styles"

  let { unstyled, class: className, children, ...props }: FieldOptionalTextProps = $props()
  const field = useFieldContext()
  const styles = useFieldStyles()
</script>

{#if !field?.()?.required}
  <span {...props} data-slot="optionalText" class={[!unstyled && styles().optionalText, className]}>
    {#if children}{@render children()}{:else}(optional){/if}
  </span>
{/if}
