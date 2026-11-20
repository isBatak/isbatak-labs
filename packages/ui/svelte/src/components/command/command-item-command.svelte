<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export type CommandItemCommandProps = HTMLAttributes<HTMLElement> & { ref?: HTMLElement | null; unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCommandStyles } from "./command-context"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: CommandItemCommandProps = $props()
  const styles = useCommandStyles()
</script>

<kbd bind:this={ref} {...props} data-slot="itemCommand" class={[!unstyled && styles().itemCommand, className]}>
  {@render children?.()}
</kbd>
