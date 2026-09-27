<script module lang="ts">
  import { Accordion } from "@ark-ui/svelte/accordion"

  export type AccordionItemContentProps = Accordion.ItemContentProps
</script>

<script lang="ts">
  import { useAccordionStyles } from "./accordion-styles"

  let { ref = $bindable(null), class: className, ...props }: AccordionItemContentProps = $props()
  const styles = useAccordionStyles()
</script>

<Accordion.ItemContent bind:ref {...props} data-slot="itemContent" class={[styles().itemContent, className]} />
