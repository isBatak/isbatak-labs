<script module lang="ts">
  import { RadioGroup } from "@ark-ui/svelte/radio-group"

  export type RadioCardIndicatorProps = RadioGroup.IndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useRadioCardStyles } from "./radio-card-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: RadioCardIndicatorProps = $props()
  const styles = useRadioCardStyles()
</script>

<RadioGroup.Indicator bind:ref {...props} data-slot="indicator" class={[!unstyled && styles().indicator, className]} />
