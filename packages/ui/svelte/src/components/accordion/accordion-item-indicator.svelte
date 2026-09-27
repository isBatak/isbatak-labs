<script module lang="ts">
  import { Accordion } from "@ark-ui/svelte/accordion"

  export type AccordionItemIndicatorProps = Accordion.ItemIndicatorProps
</script>

<script lang="ts">
  import { useAccordionStyles } from "./accordion-styles"

  let { ref = $bindable(null), class: className, ...props }: AccordionItemIndicatorProps = $props()
  const styles = useAccordionStyles()
</script>

<Accordion.ItemIndicator bind:ref {...props} data-slot="itemIndicator" class={[styles().itemIndicator, className]} />
