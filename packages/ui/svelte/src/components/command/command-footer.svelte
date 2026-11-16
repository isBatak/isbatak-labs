<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export type CommandFooterProps = HTMLAttributes<HTMLDivElement> & { ref?: HTMLDivElement | null; unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCommandStyles } from "./command-context"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: CommandFooterProps = $props()
  const styles = useCommandStyles()
</script>

<div bind:this={ref} {...props} data-slot="footer" class={[!unstyled && styles().footer, className]}>
  {@render children?.()}
</div>
