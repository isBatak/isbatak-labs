<script module lang="ts">
  import { RadioGroup } from "@ark-ui/svelte/radio-group"

  export type RadioGroupIndicatorProps = RadioGroup.IndicatorProps
</script>

<script lang="ts">
  import { useRadioGroupStyles } from "./radio-group-styles"

  let { ref = $bindable(null), class: className, ...props }: RadioGroupIndicatorProps = $props()
  const styles = useRadioGroupStyles()
</script>

<RadioGroup.Indicator bind:ref {...props} data-slot="indicator" class={[styles().indicator, className]} />
