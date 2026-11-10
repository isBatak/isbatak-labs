<script module lang="ts">
  import { Collapsible } from "@ark-ui/svelte/collapsible"
  import { collapsible, type CollapsibleVariantProps } from "@isbatak/panda-ds/recipes"

  export type CollapsibleRootProviderProps = Collapsible.RootProviderProps & CollapsibleVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideCollapsibleStyles } from "./collapsible-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CollapsibleRootProviderProps = $props()
  const [variantProps, localProps] = $derived(collapsible.splitVariantProps(props))
  const styles = $derived(collapsible(variantProps))
  provideCollapsibleStyles(() => styles)
</script>

<Collapsible.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
