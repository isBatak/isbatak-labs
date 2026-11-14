<script module lang="ts">
  import { Marquee } from "@ark-ui/svelte/marquee"

  export type MarqueeItemProps = Marquee.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useMarqueeStyles } from "./marquee-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: MarqueeItemProps = $props()
  const styles = useMarqueeStyles()
</script>

<Marquee.Item bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
