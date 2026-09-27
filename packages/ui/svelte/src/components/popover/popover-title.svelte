<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type PopoverTitleProps = Popover.TitleProps
</script>

<script lang="ts">
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), class: className, ...props }: PopoverTitleProps = $props()
  const styles = usePopoverStyles()
</script>

<Popover.Title bind:ref {...props} data-slot="title" class={[styles().title, className]} />
