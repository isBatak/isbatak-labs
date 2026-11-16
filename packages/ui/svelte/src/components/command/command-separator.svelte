<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export type CommandSeparatorProps = HTMLAttributes<HTMLDivElement> & { ref?: HTMLDivElement | null; unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCommandStyles } from "./command-context"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: CommandSeparatorProps = $props()
  const styles = useCommandStyles()
</script>

<div bind:this={ref} role="presentation" {...props} data-slot="separator" class={[!unstyled && styles().separator, className]}>
  {@render children?.()}
</div>
