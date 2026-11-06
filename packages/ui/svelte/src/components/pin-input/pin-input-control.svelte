<script module lang="ts">
  import { PinInput } from "@ark-ui/svelte/pin-input"

  export type PinInputControlProps = PinInput.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { usePinInputStyles } from "./pin-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PinInputControlProps = $props()
  const styles = usePinInputStyles()
</script>

<PinInput.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
