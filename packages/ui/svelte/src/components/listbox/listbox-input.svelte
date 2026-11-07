<script module lang="ts">
  import { Listbox } from "@ark-ui/svelte/listbox"

  export type ListboxInputProps = Listbox.InputProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useListboxStyles } from "./listbox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ListboxInputProps = $props()
  const styles = useListboxStyles()
</script>

<Listbox.Input bind:ref {...props} data-slot="input" class={[!unstyled && styles().input, className]} />
