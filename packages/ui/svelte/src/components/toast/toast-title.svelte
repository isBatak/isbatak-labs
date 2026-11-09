<script module lang="ts">
  import { Toast } from "@ark-ui/svelte/toast"

  export type ToastTitleProps = Toast.TitleProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useToastStyles } from "./toast-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ToastTitleProps = $props()
  const styles = useToastStyles()
</script>

<Toast.Title bind:ref {...props} data-slot="title" class={[!unstyled && styles().title, className]} />
