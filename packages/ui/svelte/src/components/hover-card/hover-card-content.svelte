<script module lang="ts">
  import { HoverCard } from "@ark-ui/svelte/hover-card"

  export type HoverCardContentProps = HoverCard.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useHoverCardStyles } from "./hover-card-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: HoverCardContentProps = $props()
  const styles = useHoverCardStyles()
</script>

<HoverCard.Content bind:ref {...props} data-slot="content" class={[!unstyled && styles().content, className]} />
