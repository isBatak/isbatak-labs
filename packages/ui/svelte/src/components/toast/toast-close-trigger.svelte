<script module lang="ts">
  import { Toast } from "@ark-ui/svelte/toast"

  export type ToastCloseTriggerProps = Toast.CloseTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { CloseButton } from "../button"
  import { useToastStyles } from "./toast-styles"

  let { ref = $bindable(null), unstyled, class: className, children, asChild, ...props }: ToastCloseTriggerProps =
    $props()
  const styles = useToastStyles()
</script>

{#snippet closeButton(triggerProps: () => Record<string, unknown>)}
  <CloseButton {...triggerProps()} size="xs" />
{/snippet}

<Toast.CloseTrigger
  bind:ref
  {...props}
  {...asChild ? { asChild } : children ? {} : { asChild: closeButton }}
  data-slot="closeTrigger"
  class={[!unstyled && styles().closeTrigger, className]}
>
  {@render children?.()}
</Toast.CloseTrigger>
