"use client"

import { Accordion } from "@isbatak/react-ui/accordion"
import type { ReactNode } from "react"
import { styled } from "styled-system/jsx"

import { Icon } from "../ui/icon"

export function Faq({ children }: { children: ReactNode }) {
  return (
    <Accordion.Root multiple collapsible my="6">
      {children}
    </Accordion.Root>
  )
}

export function FaqItem({ question, children }: { question: string; children: ReactNode }) {
  return (
    <Accordion.Item value={question}>
      <Accordion.ItemTrigger>
        <styled.span flex="1">{question}</styled.span>
        <Accordion.ItemIndicator>
          <Icon name="chevron-down" />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>
        <Accordion.ItemBody>{children}</Accordion.ItemBody>
      </Accordion.ItemContent>
    </Accordion.Item>
  )
}
