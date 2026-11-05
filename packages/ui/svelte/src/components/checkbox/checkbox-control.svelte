<script module lang="ts">
  import { Checkbox } from "@ark-ui/svelte/checkbox"

  export type CheckboxControlProps = Checkbox.ControlProps
</script>

<script lang="ts">
  import CheckboxIndicator from "./checkbox-indicator.svelte"
  import { useCheckboxStyles } from "./checkbox-styles"

  let { ref = $bindable(null), class: className, children, ...props }: CheckboxControlProps = $props()
  const styles = useCheckboxStyles()
</script>

<Checkbox.Control bind:ref {...props} data-slot="control" class={[styles().control, className]}>
  {#if children}{@render children()}{:else}<CheckboxIndicator />{/if}
</Checkbox.Control>
