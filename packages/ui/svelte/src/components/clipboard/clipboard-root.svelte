<script module lang="ts">
  import { Clipboard } from "@ark-ui/svelte/clipboard"
  import { type ClipboardVariantProps, clipboard } from "@isbatak/panda-ds/recipes"

  export type ClipboardRootProps = Clipboard.RootProps & ClipboardVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideClipboardStyles } from "./clipboard-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ClipboardRootProps = $props()
  const [variantProps, localProps] = $derived(clipboard.splitVariantProps(props))
  const styles = $derived(clipboard(variantProps))
  provideClipboardStyles(() => styles)
</script>

<Clipboard.Root bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
