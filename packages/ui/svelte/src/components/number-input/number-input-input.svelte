<script module lang="ts">
  import { NumberInput } from "@ark-ui/svelte/number-input"

  export type NumberInputInputProps = NumberInput.InputProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNumberInputStyles } from "./number-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NumberInputInputProps = $props()
  const styles = useNumberInputStyles()
</script>

<NumberInput.Input bind:ref {...props} data-slot="input" class={[!unstyled && styles().input, className]} />
