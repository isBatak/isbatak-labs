<script module lang="ts">
  import { Accordion } from "@ark-ui/svelte/accordion"

  export type AccordionItemTriggerProps = Accordion.ItemTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useAccordionStyles } from "./accordion-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: AccordionItemTriggerProps = $props()
  const styles = useAccordionStyles()
</script>

<Accordion.ItemTrigger bind:ref {...props} data-slot="itemTrigger" class={[!unstyled && styles().itemTrigger, className]} />
