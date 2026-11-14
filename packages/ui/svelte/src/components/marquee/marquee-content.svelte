<script module lang="ts">
  import { Marquee } from "@ark-ui/svelte/marquee"

  export type MarqueeContentProps = Marquee.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useMarqueeStyles } from "./marquee-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: MarqueeContentProps = $props()
  const styles = useMarqueeStyles()
</script>

<Marquee.Content bind:ref {...props} data-slot="content" class={[!unstyled && styles().content, className]} />
