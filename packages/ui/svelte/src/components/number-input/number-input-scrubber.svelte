<script module lang="ts">
  import { NumberInput } from "@ark-ui/svelte/number-input"

  export type NumberInputScrubberProps = NumberInput.ScrubberProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useNumberInputStyles } from "./number-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: NumberInputScrubberProps = $props()
  const styles = useNumberInputStyles()
</script>

<NumberInput.Scrubber bind:ref {...props} data-slot="scrubber" class={[!unstyled && styles().scrubber, className]} />
