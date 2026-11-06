<script module lang="ts">
  import { RadioGroup } from "@ark-ui/svelte/radio-group"

  export type RadioGroupItemControlProps = RadioGroup.ItemControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useRadioGroupItemContext } from "@ark-ui/svelte/radio-group"
  import { useRadioGroupStyles } from "./radio-group-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: RadioGroupItemControlProps = $props()
  const styles = useRadioGroupStyles()
  const item = useRadioGroupItemContext()
</script>

<RadioGroup.ItemControl bind:ref {...props} data-slot="itemControl" class={[!unstyled && styles().itemControl, className]}>
  {#if children}{@render children()}{:else if item().checked}<span class="dot"></span>{/if}
</RadioGroup.ItemControl>
