<script module lang="ts">
  import { NumberInput } from "@ark-ui/svelte/number-input"

  export type NumberInputLabelProps = NumberInput.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNumberInputStyles } from "./number-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NumberInputLabelProps = $props()
  const styles = useNumberInputStyles()
</script>

<NumberInput.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
