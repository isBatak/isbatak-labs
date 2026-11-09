<script module lang="ts">
  import { FloatingPanel } from "@ark-ui/svelte/floating-panel"

  export type FloatingPanelCloseTriggerProps = FloatingPanel.CloseTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { CloseButton } from "../button"
  import { useFloatingPanelStyles } from "./floating-panel-styles"

  let {
    ref = $bindable(null),
    unstyled,
    class: className,
    children,
    asChild,
    ...props
  }: FloatingPanelCloseTriggerProps = $props()
  const styles = useFloatingPanelStyles()
</script>

{#snippet closeButton(triggerProps: () => Record<string, unknown>)}
  <CloseButton {...triggerProps()} size="xs" />
{/snippet}

<FloatingPanel.CloseTrigger
  bind:ref
  {...props}
  {...asChild ? { asChild } : children ? {} : { asChild: closeButton }}
  data-slot="closeTrigger"
  class={[!unstyled && styles().closeTrigger, className]}
>
  {@render children?.()}
</FloatingPanel.CloseTrigger>
