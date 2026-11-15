<script module lang="ts">
  import { JsonTreeView } from "@ark-ui/svelte/json-tree-view"
  import { jsonTreeView, type JsonTreeViewVariantProps } from "@isbatak/panda-ds/recipes"

  export type JsonTreeViewRootProviderProps = JsonTreeView.RootProviderProps &
    JsonTreeViewVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideJsonTreeViewStyles } from "./json-tree-view-styles"

  let { unstyled, class: className, ...props }: JsonTreeViewRootProviderProps = $props()
  const [variantProps, localProps] = $derived(jsonTreeView.splitVariantProps(props))
  const styles = $derived(jsonTreeView(variantProps))
  provideJsonTreeViewStyles(() => styles)
</script>

<JsonTreeView.RootProvider {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
