<script module lang="ts">
  import { Marquee } from "@ark-ui/svelte/marquee"
  import { marquee, type MarqueeVariantProps } from "@isbatak/panda-ds/recipes"

  export type MarqueeRootProps = Marquee.RootProps & MarqueeVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideMarqueeStyles } from "./marquee-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: MarqueeRootProps = $props()
  const [variantProps, localProps] = $derived(marquee.splitVariantProps(props))
  const styles = $derived(marquee(variantProps))
  provideMarqueeStyles(() => styles)
</script>

<Marquee.Root bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
