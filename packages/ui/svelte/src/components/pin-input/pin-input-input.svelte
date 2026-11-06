<script module lang="ts">
  import { PinInput } from "@ark-ui/svelte/pin-input"

  export type PinInputInputProps = PinInput.InputProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { usePinInputStyles } from "./pin-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PinInputInputProps = $props()
  const styles = usePinInputStyles()
</script>

<PinInput.Input bind:ref {...props} data-slot="input" class={[!unstyled && styles().input, className]} />
