<script module lang="ts">
  import { Field } from "@ark-ui/svelte/field"

  export type FieldErrorTextProps = Field.ErrorTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFieldStyles } from "./field-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FieldErrorTextProps = $props()
  const styles = useFieldStyles()
</script>

<Field.ErrorText bind:ref {...props} data-slot="errorText" class={[!unstyled && styles().errorText, className]} />
