<script module lang="ts">
  import { Toast } from "@ark-ui/svelte/toast"

  export type ToastActionTriggerProps = Toast.ActionTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useToastStyles } from "./toast-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ToastActionTriggerProps = $props()
  const styles = useToastStyles()
</script>

<Toast.ActionTrigger bind:ref {...props} data-slot="actionTrigger" class={[!unstyled && styles().actionTrigger, className]} />
