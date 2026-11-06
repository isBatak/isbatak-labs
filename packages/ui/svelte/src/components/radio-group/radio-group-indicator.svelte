<script module lang="ts">
  import { RadioGroup } from "@ark-ui/svelte/radio-group"

  export type RadioGroupIndicatorProps = RadioGroup.IndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useRadioGroupStyles } from "./radio-group-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: RadioGroupIndicatorProps = $props()
  const styles = useRadioGroupStyles()
</script>

<RadioGroup.Indicator bind:ref {...props} data-slot="indicator" class={[!unstyled && styles().indicator, className]} />
