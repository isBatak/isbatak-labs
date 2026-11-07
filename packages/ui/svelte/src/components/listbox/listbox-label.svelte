<script module lang="ts">
  import { Listbox } from "@ark-ui/svelte/listbox"

  export type ListboxLabelProps = Listbox.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useListboxStyles } from "./listbox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ListboxLabelProps = $props()
  const styles = useListboxStyles()
</script>

<Listbox.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
