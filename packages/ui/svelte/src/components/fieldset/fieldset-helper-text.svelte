<script module lang="ts">
  import { Fieldset } from "@ark-ui/svelte/fieldset"

  export type FieldsetHelperTextProps = Fieldset.HelperTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFieldsetStyles } from "./fieldset-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FieldsetHelperTextProps = $props()
  const styles = useFieldsetStyles()
</script>

<Fieldset.HelperText bind:ref {...props} data-slot="helperText" class={[!unstyled && styles().helperText, className]} />
