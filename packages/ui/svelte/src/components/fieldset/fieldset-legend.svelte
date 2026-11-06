<script module lang="ts">
  import { Fieldset } from "@ark-ui/svelte/fieldset"

  export type FieldsetLegendProps = Fieldset.LegendProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFieldsetStyles } from "./fieldset-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FieldsetLegendProps = $props()
  const styles = useFieldsetStyles()
</script>

<Fieldset.Legend bind:ref {...props} data-slot="legend" class={[!unstyled && styles().legend, className]} />
