import { Accordion } from "@isbatak/react-ui/accordion"

import { Section } from "../canvas/layout"
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

export function AccordionDemo() {
  return (
    <>
      <Section title="Basic">
        <Accordion.Root defaultValue={["a"]} collapsible>
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
              <Accordion.ItemBody>
                Yes. It comes with default styles that match the other components.
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item value="c">
            <Accordion.ItemTrigger>
              Is it animated?
              <Accordion.ItemIndicator ms="auto">
                <ChevronDownIcon />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Yes. It animates height and opacity when it opens and closes.</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </Section>

      <Section title="Multiple">
        <Accordion.Root multiple defaultValue={["a", "b"]}>
          <Accordion.Item value="a">
            <Accordion.ItemTrigger>
              What are the key considerations when implementing a comprehensive enterprise-level authentication system?
              <Accordion.ItemIndicator ms="auto">
                <ChevronDownIcon />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>
                Identity providers, session management, auditing and recovery flows.
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item value="b">
            <Accordion.ItemTrigger>
              How does modern distributed system architecture handle eventual consistency across multiple regions?
              <Accordion.ItemIndicator ms="auto">
                <ChevronDownIcon />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>
                With replication strategies, conflict resolution and idempotent writes.
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </Section>

      <Section title="Enclosed">
        <AccordionSample variant="enclosed" />
      </Section>

      <Section title="Subtle">
        <AccordionSample variant="subtle" />
      </Section>
    </>
  )
}
