import { Accordion } from "@isbatak/react-ui/accordion"

import { ChevronDownIcon } from "./primitives"
import type { SampleProps } from "./types"

export function AccordionSample(props: SampleProps) {
  return (
    <Accordion.Root defaultValue={["a"]} collapsible {...props}>
      <Accordion.Item value="a">
        <Accordion.ItemTrigger>
          Is it accessible?
          <Accordion.ItemIndicator ms="auto">
            <ChevronDownIcon />
          </Accordion.ItemIndicator>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="b">
        <Accordion.ItemTrigger>
          Is it styled?
          <Accordion.ItemIndicator ms="auto">
            <ChevronDownIcon />
          </Accordion.ItemIndicator>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>Yes. It comes with styles from the design system.</Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  )
}
