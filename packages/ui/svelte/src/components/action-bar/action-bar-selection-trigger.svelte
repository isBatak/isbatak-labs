<script module lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements"

  export interface ActionBarSelectionTriggerProps extends HTMLButtonAttributes {
    unstyled?: boolean | undefined
    ref?: HTMLButtonElement | null
  }
</script>

<script lang="ts">
  import { useActionBarStyles } from "./action-bar-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: ActionBarSelectionTriggerProps = $props()
  const styles = useActionBarStyles()
</script>

<button bind:this={ref} type="button" {...props} data-slot="selectionTrigger" class={[!unstyled && styles().selectionTrigger, className]}>{@render children?.()}</button>
