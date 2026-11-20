<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type CommandListProps = Combobox.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCommandStyles } from "./command-context"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CommandListProps = $props()
  const styles = useCommandStyles()
</script>

<Combobox.Content bind:ref {...props} data-slot="list" class={[!unstyled && styles().list, className]} />
