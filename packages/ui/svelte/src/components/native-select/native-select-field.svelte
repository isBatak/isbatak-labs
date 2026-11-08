<script module lang="ts">
  import { Field } from "@ark-ui/svelte/field"

  export type NativeSelectFieldProps = Field.SelectProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNativeSelectStyles } from "./native-select-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NativeSelectFieldProps = $props()
  const styles = useNativeSelectStyles()
</script>

<Field.Select bind:ref {...props} data-slot="field" class={[!unstyled && styles().field, className]} />
