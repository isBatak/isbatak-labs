import { Accordion } from "@ark-ui/solid/accordion"
import type { ComponentProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/ui-solid/jsx"
import { accordion } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(accordion)

export const AccordionRoot = withProvider(Accordion.Root, "root")
export type AccordionRootProps = ComponentProps<typeof AccordionRoot>

export const AccordionItem = withContext(Accordion.Item, "item")
export type AccordionItemProps = ComponentProps<typeof AccordionItem>

export const AccordionItemTrigger = withContext(Accordion.ItemTrigger, "itemTrigger")
export type AccordionItemTriggerProps = ComponentProps<typeof AccordionItemTrigger>

export const AccordionItemContent = withContext(Accordion.ItemContent, "itemContent")
export type AccordionItemContentProps = ComponentProps<typeof AccordionItemContent>

export const AccordionItemIndicator = withContext(Accordion.ItemIndicator, "itemIndicator")
export type AccordionItemIndicatorProps = ComponentProps<typeof AccordionItemIndicator>

export const AccordionItemBody = withContext("div", "itemBody")
export type AccordionItemBodyProps = ComponentProps<typeof AccordionItemBody>

export const AccordionContext = Accordion.Context
export type AccordionContextProps = Accordion.ContextProps

export const AccordionItemContext = Accordion.ItemContext
export type AccordionItemContextProps = Accordion.ItemContextProps
