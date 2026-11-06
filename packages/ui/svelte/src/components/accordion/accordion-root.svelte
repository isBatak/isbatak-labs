<script module lang="ts">
  import { Accordion } from "@ark-ui/svelte/accordion"
  import { accordion, type AccordionVariantProps } from "@isbatak/panda-ds/recipes"

  export type AccordionRootProps = Accordion.RootProps & AccordionVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideAccordionStyles } from "./accordion-styles"

  let { ref = $bindable(null), value = $bindable(), unstyled, class: className, ...props }: AccordionRootProps = $props()
  const [variantProps, localProps] = $derived(accordion.splitVariantProps(props))
  const styles = $derived(accordion(variantProps))
  provideAccordionStyles(() => styles)
</script>

<Accordion.Root bind:ref bind:value {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
