<script module lang="ts">
  import { Drawer } from "@ark-ui/svelte/drawer"

  export type DrawerCloseTriggerProps = Drawer.CloseTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { CloseButton } from "../button"
  import { useDrawerStyles } from "./drawer-styles"

  let { ref = $bindable(null), unstyled, class: className, children, asChild, ...props }: DrawerCloseTriggerProps =
    $props()
  const styles = useDrawerStyles()
</script>

{#snippet closeButton(triggerProps: () => Record<string, unknown>)}
  <CloseButton {...triggerProps()} size="sm" />
{/snippet}

<Drawer.CloseTrigger
  bind:ref
  {...props}
  {...asChild ? { asChild } : children ? {} : { asChild: closeButton }}
  data-slot="closeTrigger"
  class={[!unstyled && styles().closeTrigger, className]}
>
  {@render children?.()}
</Drawer.CloseTrigger>
