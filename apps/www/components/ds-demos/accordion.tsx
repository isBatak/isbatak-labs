"use client"

import { Accordion } from "@isbatak/react-ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion.Root defaultValue={["headless"]} collapsible width="full" maxW="sm">
      <Accordion.Item value="headless">
        <Accordion.ItemTrigger>What does headless mean?</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>The behavior ships without styles, so you bring your own.</Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="frameworks">
        <Accordion.ItemTrigger>Which frameworks are supported?</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>React, Vue, Solid and Svelte.</Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="styling">
        <Accordion.ItemTrigger>How is it styled?</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>With recipes from the Panda design system.</Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  )
}
