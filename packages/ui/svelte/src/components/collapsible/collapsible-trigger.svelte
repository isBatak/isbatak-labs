<script module lang="ts">
  import { Collapsible } from "@ark-ui/svelte/collapsible"

  export type CollapsibleTriggerProps = Collapsible.TriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCollapsibleStyles } from "./collapsible-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CollapsibleTriggerProps = $props()
  const styles = useCollapsibleStyles()
</script>

<Collapsible.Trigger bind:ref {...props} data-slot="trigger" class={[!unstyled && styles().trigger, className]} />
