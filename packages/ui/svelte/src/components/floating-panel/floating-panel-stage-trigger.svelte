<script module lang="ts">
  import { FloatingPanel } from "@ark-ui/svelte/floating-panel"

  export type FloatingPanelStageTriggerProps = FloatingPanel.StageTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { IconButton } from "../button"
  import { Icon, type IconProps } from "../icon"
  import { useFloatingPanelStyles } from "./floating-panel-styles"

  let {
    ref = $bindable(null),
    unstyled,
    class: className,
    children,
    asChild,
    ...props
  }: FloatingPanelStageTriggerProps = $props()
  const styles = useFloatingPanelStyles()

  const stageIcons: Record<FloatingPanelStageTriggerProps["stage"], IconProps["name"]> = {
    minimized: "minus",
    maximized: "fullscreen",
    default: "window-restore",
  }
</script>

{#snippet iconButton(triggerProps: () => Record<string, unknown>)}
  <IconButton {...triggerProps()} variant="ghost" size="xs">
    <Icon name={stageIcons[props.stage]} />
  </IconButton>
{/snippet}

<FloatingPanel.StageTrigger
  bind:ref
  {...props}
  {...asChild ? { asChild } : children ? {} : { asChild: iconButton }}
  data-slot="stageTrigger"
  class={[!unstyled && styles().stageTrigger, className]}
>
  {@render children?.()}
</FloatingPanel.StageTrigger>
