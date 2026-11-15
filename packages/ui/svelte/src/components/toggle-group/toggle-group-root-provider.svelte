<script module lang="ts">
  import { ToggleGroup } from "@ark-ui/svelte/toggle-group"
  import { toggleGroup, type ToggleGroupVariantProps } from "@isbatak/panda-ds/recipes"

  export type ToggleGroupRootProviderProps = ToggleGroup.RootProviderProps &
    ToggleGroupVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideToggleGroupStyles } from "./toggle-group-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ToggleGroupRootProviderProps = $props()
  const [variantProps, localProps] = $derived(toggleGroup.splitVariantProps(props))
  const styles = $derived(toggleGroup(variantProps))
  provideToggleGroupStyles(() => styles)
</script>

<ToggleGroup.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
