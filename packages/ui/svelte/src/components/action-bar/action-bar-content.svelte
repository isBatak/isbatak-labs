<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type ActionBarContentProps = Popover.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useActionBarStyles } from "./action-bar-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ActionBarContentProps = $props()
  const styles = useActionBarStyles()
</script>

<Popover.Content bind:ref {...props} data-slot="content" class={[!unstyled && styles().content, className]} />
