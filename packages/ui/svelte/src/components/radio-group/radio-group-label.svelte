<script module lang="ts">
  import { RadioGroup } from "@ark-ui/svelte/radio-group"

  export type RadioGroupLabelProps = RadioGroup.LabelProps
</script>

<script lang="ts">
  import { useRadioGroupStyles } from "./radio-group-styles"

  let { ref = $bindable(null), class: className, ...props }: RadioGroupLabelProps = $props()
  const styles = useRadioGroupStyles()
</script>

<RadioGroup.Label bind:ref {...props} data-slot="label" class={[styles().label, className]} />
