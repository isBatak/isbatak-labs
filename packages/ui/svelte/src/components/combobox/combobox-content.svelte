<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type ComboboxContentProps = Combobox.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useComboboxStyles } from "./combobox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ComboboxContentProps = $props()
  const styles = useComboboxStyles()
</script>

<Combobox.Content bind:ref {...props} data-slot="content" class={[!unstyled && styles().content, className]} />
