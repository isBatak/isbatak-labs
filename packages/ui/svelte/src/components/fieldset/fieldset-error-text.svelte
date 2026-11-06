<script module lang="ts">
  import { Fieldset } from "@ark-ui/svelte/fieldset"

  export type FieldsetErrorTextProps = Fieldset.ErrorTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFieldsetStyles } from "./fieldset-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FieldsetErrorTextProps = $props()
  const styles = useFieldsetStyles()
</script>

<Fieldset.ErrorText bind:ref {...props} data-slot="errorText" class={[!unstyled && styles().errorText, className]} />
