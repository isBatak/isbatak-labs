<script module lang="ts">
  import { Splitter } from "@ark-ui/svelte/splitter"
  import { splitter, type SplitterVariantProps } from "@isbatak/panda-ds/recipes"

  export type SplitterRootProps = Splitter.RootProps & SplitterVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideSplitterStyles } from "./splitter-styles"

  let { ref = $bindable(null), size = $bindable(), unstyled, class: className, ...props }: SplitterRootProps = $props()
  const [variantProps, localProps] = $derived(splitter.splitVariantProps(props))
  const styles = $derived(splitter(variantProps))
  provideSplitterStyles(() => styles)
</script>

<Splitter.Root bind:ref bind:size {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
