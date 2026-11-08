<script module lang="ts">
  import { Dialog } from "@ark-ui/svelte/dialog"
  import { dialog, type DialogVariantProps } from "@isbatak/panda-ds/recipes"

  export type DialogRootProviderProps = Dialog.RootProviderProps & DialogVariantProps
</script>

<script lang="ts">
  import { provideDialogStyles } from "./dialog-styles"

  let { lazyMount = true, unmountOnExit = true, ...props }: DialogRootProviderProps = $props()
  const [variantProps, localProps] = $derived(dialog.splitVariantProps(props))
  const styles = $derived(dialog(variantProps))
  provideDialogStyles(() => styles)
</script>

<Dialog.RootProvider {lazyMount} {unmountOnExit} {...localProps} />
