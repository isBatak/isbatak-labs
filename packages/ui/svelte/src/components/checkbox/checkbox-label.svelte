<script module lang="ts">
  import { Checkbox } from "@ark-ui/svelte/checkbox"

  export type CheckboxLabelProps = Checkbox.LabelProps
</script>

<script lang="ts">
  import { useCheckboxStyles } from "./checkbox-styles"

  let { ref = $bindable(null), class: className, ...props }: CheckboxLabelProps = $props()
  const styles = useCheckboxStyles()
</script>

<Checkbox.Label bind:ref {...props} data-slot="label" class={[styles().label, className]} />
