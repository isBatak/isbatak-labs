<script module lang="ts">
  import { Marquee } from "@ark-ui/svelte/marquee"

  export type MarqueeViewportProps = Marquee.ViewportProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useMarqueeStyles } from "./marquee-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: MarqueeViewportProps = $props()
  const styles = useMarqueeStyles()
</script>

<Marquee.Viewport bind:ref {...props} data-slot="viewport" class={[!unstyled && styles().viewport, className]} />
