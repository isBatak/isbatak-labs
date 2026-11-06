<script module lang="ts">
  import { Field } from "@ark-ui/svelte/field"

  export type FieldRequiredIndicatorProps = Field.RequiredIndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFieldStyles } from "./field-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: FieldRequiredIndicatorProps = $props()
  const styles = useFieldStyles()
</script>

<Field.RequiredIndicator bind:ref {...props} data-slot="requiredIndicator" class={[!unstyled && styles().requiredIndicator, className]}>
  {#if children}{@render children()}{:else}*{/if}
</Field.RequiredIndicator>
