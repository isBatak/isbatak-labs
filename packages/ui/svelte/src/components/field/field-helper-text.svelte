<script module lang="ts">
  import { Field } from "@ark-ui/svelte/field"

  export type FieldHelperTextProps = Field.HelperTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFieldStyles } from "./field-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FieldHelperTextProps = $props()
  const styles = useFieldStyles()
</script>

<Field.HelperText bind:ref {...props} data-slot="helperText" class={[!unstyled && styles().helperText, className]} />
