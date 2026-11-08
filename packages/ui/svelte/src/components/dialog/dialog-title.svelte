<script module lang="ts">
  import { Dialog } from "@ark-ui/svelte/dialog"

  export type DialogTitleProps = Dialog.TitleProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDialogStyles } from "./dialog-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DialogTitleProps = $props()
  const styles = useDialogStyles()
</script>

<Dialog.Title bind:ref {...props} data-slot="title" class={[!unstyled && styles().title, className]} />
