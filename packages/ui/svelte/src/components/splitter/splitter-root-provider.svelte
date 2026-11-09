<script module lang="ts">
  import { Splitter } from "@ark-ui/svelte/splitter"
  import { splitter, type SplitterVariantProps } from "@isbatak/panda-ds/recipes"

  export type SplitterRootProviderProps = Splitter.RootProviderProps &
    SplitterVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideSplitterStyles } from "./splitter-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SplitterRootProviderProps = $props()
  const [variantProps, localProps] = $derived(splitter.splitVariantProps(props))
  const styles = $derived(splitter(variantProps))
  provideSplitterStyles(() => styles)
</script>

<Splitter.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
