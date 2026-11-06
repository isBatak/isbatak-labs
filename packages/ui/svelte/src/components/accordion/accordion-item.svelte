<script module lang="ts">
  import { Accordion } from "@ark-ui/svelte/accordion"

  export type AccordionItemProps = Accordion.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useAccordionStyles } from "./accordion-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: AccordionItemProps = $props()
  const styles = useAccordionStyles()
</script>

<Accordion.Item bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
