<script module lang="ts">
  import { Dialog } from "@ark-ui/svelte/dialog"
  import { dialog, type DialogVariantProps } from "@isbatak/panda-ds/recipes"

  export type DialogRootProps = Dialog.RootProps & DialogVariantProps
</script>

<script lang="ts">
  import { provideDialogStyles } from "./dialog-styles"

  let { open = $bindable(), lazyMount = true, unmountOnExit = true, ...props }: DialogRootProps = $props()
  const [variantProps, localProps] = $derived(dialog.splitVariantProps(props))
  const styles = $derived(dialog(variantProps))
  provideDialogStyles(() => styles)
</script>

<Dialog.Root bind:open {lazyMount} {unmountOnExit} {...localProps} />
