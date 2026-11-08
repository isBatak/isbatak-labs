<script module lang="ts">
  import { Drawer } from "@ark-ui/svelte/drawer"
  import { drawer, type DrawerVariantProps } from "@isbatak/panda-ds/recipes"

  export type DrawerIndentProps = Drawer.IndentProps & DrawerVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  let { ref = $bindable(null), unstyled, class: className, ...props }: DrawerIndentProps = $props()
  const [variantProps, localProps] = $derived(drawer.splitVariantProps(props))
  const styles = $derived(drawer(variantProps))
</script>

<Drawer.Indent bind:ref {...localProps} data-slot="indent" class={[!unstyled && styles.indent, className]} />
