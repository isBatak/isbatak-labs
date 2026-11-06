<script module lang="ts">
  import { NumberInput } from "@ark-ui/svelte/number-input"

  export type NumberInputValueTextProps = NumberInput.ValueTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNumberInputStyles } from "./number-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NumberInputValueTextProps = $props()
  const styles = useNumberInputStyles()
</script>

<NumberInput.ValueText bind:ref {...props} data-slot="valueText" class={[!unstyled && styles().valueText, className]} />
