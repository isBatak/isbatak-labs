import { Accordion } from "@isbatak/react-ui/accordion"
import { Text } from "@isbatak/react-ui/text"
import { Stack } from "styled-system/jsx"
import { useState } from "react"

export function AccordionControlledDemo() {
  const [value, setValue] = useState(["returns"])

  return (
    <Stack gap="4" width="full" maxW="md">
      <Text textStyle="sm" color="fg.muted">
        Expanded: {value.join(", ") || "none"}
      </Text>
      <Accordion.Root value={value} onValueChange={(details) => setValue(details.value)} collapsible>
        <Accordion.Item value="shipping">
          <Accordion.ItemTrigger>
            How long does shipping take?
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>Orders ship within two working days and arrive in three to five.</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
        <Accordion.Item value="returns">
          <Accordion.ItemTrigger>
            Can I return an item?
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>Yes, within 30 days of delivery, as long as it's unused.</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
        <Accordion.Item value="payment">
          <Accordion.ItemTrigger>
            Which payment methods do you take?
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>Cards, PayPal and bank transfer.</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </Stack>
  )
}
