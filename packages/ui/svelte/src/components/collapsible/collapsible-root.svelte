<script module lang="ts">
  import { Collapsible } from "@ark-ui/svelte/collapsible"
  import { collapsible, type CollapsibleVariantProps } from "@isbatak/panda-ds/recipes"

  export type CollapsibleRootProps = Collapsible.RootProps & CollapsibleVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideCollapsibleStyles } from "./collapsible-styles"

  let { ref = $bindable(null), open = $bindable(), unstyled, class: className, ...props }: CollapsibleRootProps = $props()
  const [variantProps, localProps] = $derived(collapsible.splitVariantProps(props))
  const styles = $derived(collapsible(variantProps))
  provideCollapsibleStyles(() => styles)
</script>

<Collapsible.Root bind:ref bind:open {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
