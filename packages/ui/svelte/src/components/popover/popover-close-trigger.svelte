<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type PopoverCloseTriggerProps = Popover.CloseTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { CloseButton } from "../button"
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), unstyled, class: className, children, asChild, ...props }: PopoverCloseTriggerProps =
    $props()
  const styles = usePopoverStyles()
</script>

{#snippet closeButton(triggerProps: () => Record<string, unknown>)}
  <CloseButton {...triggerProps()} size="sm" />
{/snippet}

<Popover.CloseTrigger
  bind:ref
  {...props}
  {...asChild ? { asChild } : children ? {} : { asChild: closeButton }}
  data-slot="closeTrigger"
  class={[!unstyled && styles().closeTrigger, className]}
>
  {@render children?.()}
</Popover.CloseTrigger>
