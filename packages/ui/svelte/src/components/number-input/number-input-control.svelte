<script module lang="ts">
  import { NumberInput } from "@ark-ui/svelte/number-input"

  export type NumberInputControlProps = NumberInput.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNumberInputStyles } from "./number-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NumberInputControlProps = $props()
  const styles = useNumberInputStyles()
</script>

<NumberInput.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
