<script module lang="ts">
  import { Listbox } from "@ark-ui/svelte/listbox"

  export type ListboxValueTextProps = Listbox.ValueTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useListboxStyles } from "./listbox-styles"

  let { unstyled, class: className, ...props }: ListboxValueTextProps = $props()
  const styles = useListboxStyles()
</script>

<Listbox.ValueText {...props} data-slot="valueText" class={[!unstyled && styles().valueText, className]} />
