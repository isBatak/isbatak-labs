<script module lang="ts">
  import { Drawer } from "@ark-ui/svelte/drawer"
  import { drawer, type DrawerVariantProps } from "@isbatak/panda-ds/recipes"

  export type DrawerIndentBackgroundProps = Drawer.IndentBackgroundProps & DrawerVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  let { ref = $bindable(null), unstyled, class: className, ...props }: DrawerIndentBackgroundProps = $props()
  const [variantProps, localProps] = $derived(drawer.splitVariantProps(props))
  const styles = $derived(drawer(variantProps))
</script>

<Drawer.IndentBackground bind:ref {...localProps} data-slot="indentBackground" class={[!unstyled && styles.indentBackground, className]} />
