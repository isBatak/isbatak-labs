<script module lang="ts">
  import { Accordion } from "@ark-ui/svelte/accordion"

  export type AccordionItemContentProps = Accordion.ItemContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useAccordionStyles } from "./accordion-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: AccordionItemContentProps = $props()
  const styles = useAccordionStyles()
</script>

<Accordion.ItemContent bind:ref {...props} data-slot="itemContent" class={[!unstyled && styles().itemContent, className]} />
