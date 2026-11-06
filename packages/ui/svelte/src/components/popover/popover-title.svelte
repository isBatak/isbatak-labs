<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type PopoverTitleProps = Popover.TitleProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: PopoverTitleProps = $props()
  const styles = usePopoverStyles()
</script>

<Popover.Title bind:ref {...props} data-slot="title" class={[!unstyled && styles().title, className]} />
