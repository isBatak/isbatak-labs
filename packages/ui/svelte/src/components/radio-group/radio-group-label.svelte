<script module lang="ts">
  import { RadioGroup } from "@ark-ui/svelte/radio-group"

  export type RadioGroupLabelProps = RadioGroup.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useRadioGroupStyles } from "./radio-group-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: RadioGroupLabelProps = $props()
  const styles = useRadioGroupStyles()
</script>

<RadioGroup.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
