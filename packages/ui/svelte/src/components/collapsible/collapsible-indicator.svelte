<script module lang="ts">
  import { Collapsible } from "@ark-ui/svelte/collapsible"

  export type CollapsibleIndicatorProps = Collapsible.IndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useCollapsibleStyles } from "./collapsible-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: CollapsibleIndicatorProps = $props()
  const styles = useCollapsibleStyles()
</script>

<Collapsible.Indicator bind:ref {...props} data-slot="indicator" class={[!unstyled && styles().indicator, className]}>
  {#if children}{@render children()}{:else}<Icon name="chevron-down" />{/if}
</Collapsible.Indicator>
