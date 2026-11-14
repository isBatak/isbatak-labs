<script module lang="ts">
  import { Marquee } from "@ark-ui/svelte/marquee"

  export type MarqueeEdgeProps = Marquee.EdgeProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useMarqueeStyles } from "./marquee-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: MarqueeEdgeProps = $props()
  const styles = useMarqueeStyles()
</script>

<Marquee.Edge bind:ref {...props} data-slot="edge" class={[!unstyled && styles().edge, className]} />
