<script module lang="ts">
  import { Checkbox } from "@ark-ui/svelte/checkbox"

  export type CheckboxCardLabelProps = Checkbox.LabelProps
</script>

<script lang="ts">
  import { useCheckboxCardStyles } from "./checkbox-card-styles"

  let { ref = $bindable(null), class: className, ...props }: CheckboxCardLabelProps = $props()
  const styles = useCheckboxCardStyles()
</script>

<Checkbox.Label bind:ref {...props} data-slot="label" class={[styles().label, className]} />
