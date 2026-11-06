<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type PopoverDescriptionProps = Popover.DescriptionProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PopoverDescriptionProps = $props()
  const styles = usePopoverStyles()
</script>

<Popover.Description bind:ref {...props} data-slot="description" class={[!unstyled && styles().description, className]} />
