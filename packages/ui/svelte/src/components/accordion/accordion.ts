import { Accordion } from "@ark-ui/svelte/accordion"

export { default as AccordionRoot, type AccordionRootProps } from "./accordion-root.svelte"
export { default as AccordionItem, type AccordionItemProps } from "./accordion-item.svelte"
export { default as AccordionItemTrigger, type AccordionItemTriggerProps } from "./accordion-item-trigger.svelte"
export { default as AccordionItemContent, type AccordionItemContentProps } from "./accordion-item-content.svelte"
export { default as AccordionItemIndicator, type AccordionItemIndicatorProps } from "./accordion-item-indicator.svelte"
export { default as AccordionItemBody, type AccordionItemBodyProps } from "./accordion-item-body.svelte"
export const AccordionContext = Accordion.Context
export const AccordionItemContext = Accordion.ItemContext
export type AccordionContextProps = Accordion.ContextProps
export type AccordionItemContextProps = Accordion.ItemContextProps
