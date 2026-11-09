<script module lang="ts">
  import { Toast } from "@ark-ui/svelte/toast"

  export type ToastRootProps = Toast.RootProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { toast } from "@isbatak/panda-ds/recipes"
  import { provideToastStyles } from "./toast-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ToastRootProps = $props()
  const styles = toast()
  provideToastStyles(() => styles)
</script>

<Toast.Root bind:ref {...props} data-slot="root" class={[!unstyled && styles.root, className]} />
