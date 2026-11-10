<script module lang="ts">
  import { Accordion } from "@ark-ui/svelte/accordion"

  export type AccordionItemIndicatorProps = Accordion.ItemIndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useAccordionStyles } from "./accordion-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: AccordionItemIndicatorProps = $props()
  const styles = useAccordionStyles()
</script>

<Accordion.ItemIndicator
  bind:ref
  {...props}
  data-slot="itemIndicator"
  class={[!unstyled && styles().itemIndicator, className]}
>
  {#if children}{@render children()}{:else}<Icon name="chevron-down" />{/if}
</Accordion.ItemIndicator>
