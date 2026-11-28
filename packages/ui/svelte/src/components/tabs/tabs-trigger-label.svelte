<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export type TabsTriggerLabelProps = HTMLAttributes<HTMLSpanElement> & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTabsStyles } from "./tabs-styles"

  let { unstyled, class: className, children, ...props }: TabsTriggerLabelProps = $props()
  const styles = useTabsStyles()
</script>

<span {...props} data-slot="triggerLabel" class={[!unstyled && styles().triggerLabel, className]}>
  {@render children?.()}
</span>
