import { Accordion } from "@isbatak/react-ui/accordion"
import { accordion } from "@isbatak/panda-ds/recipes"

import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const accordionMatrix = defineComponentMatrix({
  recipe: accordion,
  render: (props) => (
    <Accordion.Root defaultValue={["a"]} collapsible {...props}>
      <Accordion.Item value="a">
        <Accordion.ItemTrigger>
          Is it accessible?
          <Accordion.ItemIndicator ms="auto">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="m6 9 6 6 6-6" />
            </svg>
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="m6 9 6 6 6-6" />
            </svg>
          </Accordion.ItemIndicator>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>Yes. It comes with styles from the design system.</Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  ),
})
