<script module lang="ts">
  import { ToggleGroup } from "@ark-ui/svelte/toggle-group"
  import { toggleGroup, type ToggleGroupVariantProps } from "@isbatak/panda-ds/recipes"

  export type ToggleGroupRootProps = ToggleGroup.RootProps & ToggleGroupVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideToggleGroupStyles } from "./toggle-group-styles"

  let { ref = $bindable(null), value = $bindable(), unstyled, class: className, ...props }: ToggleGroupRootProps = $props()
  const [variantProps, localProps] = $derived(toggleGroup.splitVariantProps(props))
  const styles = $derived(toggleGroup(variantProps))
  provideToggleGroupStyles(() => styles)
</script>

<ToggleGroup.Root bind:ref bind:value {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
