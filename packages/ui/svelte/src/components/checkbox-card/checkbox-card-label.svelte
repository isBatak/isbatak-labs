<script module lang="ts">
  import { Checkbox } from "@ark-ui/svelte/checkbox"

  export type CheckboxCardLabelProps = Checkbox.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCheckboxCardStyles } from "./checkbox-card-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CheckboxCardLabelProps = $props()
  const styles = useCheckboxCardStyles()
</script>

<Checkbox.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
