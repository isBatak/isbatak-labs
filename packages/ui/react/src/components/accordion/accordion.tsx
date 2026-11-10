"use client"

import { Accordion } from "@ark-ui/react/accordion"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { accordion } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon/icon"

const { withProvider, withContext } = createSlotRecipeContext(accordion)

export const AccordionRoot = withProvider(Accordion.Root, "root")
export type AccordionRootProps = ComponentProps<typeof AccordionRoot>

export const AccordionItem = withContext(Accordion.Item, "item")
export type AccordionItemProps = ComponentProps<typeof AccordionItem>

export const AccordionItemTrigger = withContext(Accordion.ItemTrigger, "itemTrigger")
export type AccordionItemTriggerProps = ComponentProps<typeof AccordionItemTrigger>

export const AccordionItemContent = withContext(Accordion.ItemContent, "itemContent")
export type AccordionItemContentProps = ComponentProps<typeof AccordionItemContent>

const StyledAccordionItemIndicator = withContext(Accordion.ItemIndicator, "itemIndicator")
export type AccordionItemIndicatorProps = ComponentProps<typeof StyledAccordionItemIndicator>

export function AccordionItemIndicator({ children, ...props }: AccordionItemIndicatorProps) {
  return (
    <StyledAccordionItemIndicator {...props}>{children ?? <Icon name="chevron-down" />}</StyledAccordionItemIndicator>
  )
}

export const AccordionItemBody = withContext("div", "itemBody")
export type AccordionItemBodyProps = ComponentProps<typeof AccordionItemBody>

export const AccordionContext = Accordion.Context
export type AccordionContextProps = Accordion.ContextProps

export const AccordionItemContext = Accordion.ItemContext
export type AccordionItemContextProps = Accordion.ItemContextProps
