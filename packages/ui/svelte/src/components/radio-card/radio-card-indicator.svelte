<script module lang="ts">
  import { RadioGroup } from "@ark-ui/svelte/radio-group"

  export type RadioCardIndicatorProps = RadioGroup.IndicatorProps
</script>

<script lang="ts">
  import { useRadioCardStyles } from "./radio-card-styles"

  let { ref = $bindable(null), class: className, ...props }: RadioCardIndicatorProps = $props()
  const styles = useRadioCardStyles()
</script>

<RadioGroup.Indicator bind:ref {...props} data-slot="indicator" class={[styles().indicator, className]} />
