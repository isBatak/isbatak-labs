<script module lang="ts">
  import { Toast } from "@ark-ui/svelte/toast"

  export type ToastDescriptionProps = Toast.DescriptionProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useToastStyles } from "./toast-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ToastDescriptionProps = $props()
  const styles = useToastStyles()
</script>

<Toast.Description bind:ref {...props} data-slot="description" class={[!unstyled && styles().description, className]} />
