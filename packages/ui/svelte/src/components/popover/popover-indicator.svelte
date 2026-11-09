<script module lang="ts">
  import { Popover } from "@ark-ui/svelte/popover"

  export type PopoverIndicatorProps = Popover.IndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { usePopoverStyles } from "./popover-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: PopoverIndicatorProps = $props()
  const styles = usePopoverStyles()
</script>

<Popover.Indicator bind:ref {...props} data-slot="indicator" class={[!unstyled && styles().indicator, className]}>
  {#if children}{@render children()}{:else}<Icon name="chevron-down" />{/if}
</Popover.Indicator>
