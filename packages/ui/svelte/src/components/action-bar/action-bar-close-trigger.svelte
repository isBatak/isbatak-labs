<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type ActionBarCloseTriggerProps = Popover.CloseTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { CloseButton } from "../button"
  import { useActionBarStyles } from "./action-bar-styles"

  let { ref = $bindable(null), unstyled, class: className, children, asChild, ...props }: ActionBarCloseTriggerProps =
    $props()
  const styles = useActionBarStyles()
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
