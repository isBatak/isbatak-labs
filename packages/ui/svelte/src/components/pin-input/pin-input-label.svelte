<script module lang="ts">
  import { PinInput } from "@ark-ui/svelte/pin-input"

  export type PinInputLabelProps = PinInput.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { usePinInputStyles } from "./pin-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PinInputLabelProps = $props()
  const styles = usePinInputStyles()
</script>

<PinInput.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
