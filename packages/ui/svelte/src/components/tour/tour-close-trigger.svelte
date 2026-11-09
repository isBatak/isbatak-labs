<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourCloseTriggerProps = Tour.CloseTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { CloseButton } from "../button"
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), unstyled, class: className, children, asChild, ...props }: TourCloseTriggerProps =
    $props()
  const styles = useTourStyles()
</script>

{#snippet closeButton(triggerProps: () => Record<string, unknown>)}
  <CloseButton {...triggerProps()} size="sm" />
{/snippet}

<Tour.CloseTrigger
  bind:ref
  {...props}
  {...asChild ? { asChild } : children ? {} : { asChild: closeButton }}
  data-slot="closeTrigger"
  class={[!unstyled && styles().closeTrigger, className]}
>
  {@render children?.()}
</Tour.CloseTrigger>
