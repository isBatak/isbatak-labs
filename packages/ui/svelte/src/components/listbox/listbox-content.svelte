<script module lang="ts">
  import { Listbox } from "@ark-ui/svelte/listbox"

  export type ListboxContentProps = Listbox.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useListboxStyles } from "./listbox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ListboxContentProps = $props()
  const styles = useListboxStyles()
</script>

<Listbox.Content bind:ref {...props} data-slot="content" class={[!unstyled && styles().content, className]} />
