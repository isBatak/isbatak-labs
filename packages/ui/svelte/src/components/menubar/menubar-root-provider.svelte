<script module lang="ts">
  import { Menubar } from "@ark-ui/svelte/menubar"
  import { menubar, type MenubarVariantProps } from "@isbatak/panda-ds/recipes"

  export type MenubarRootProviderProps = Menubar.RootProviderProps & MenubarVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideMenubarStyles } from "./menubar-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: MenubarRootProviderProps = $props()
  const [variantProps, localProps] = $derived(menubar.splitVariantProps(props))
  const styles = $derived(menubar(variantProps))
  provideMenubarStyles(() => styles)
</script>

<Menubar.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
