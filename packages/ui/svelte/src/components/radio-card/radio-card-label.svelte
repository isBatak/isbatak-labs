<script module lang="ts">
  import { RadioGroup } from "@ark-ui/svelte/radio-group"

  export type RadioCardLabelProps = RadioGroup.LabelProps
</script>

<script lang="ts">
  import { useRadioCardStyles } from "./radio-card-styles"

  let { ref = $bindable(null), class: className, ...props }: RadioCardLabelProps = $props()
  const styles = useRadioCardStyles()
</script>

<RadioGroup.Label bind:ref {...props} data-slot="label" class={[styles().label, className]} />
