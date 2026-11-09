import { Accordion } from "@isbatak/react-ui/accordion"
import { Stack } from "styled-system/jsx"

export function AccordionSizesDemo() {
  return (
    <Stack gap="8" width="full" maxW="md">
      <Accordion.Root size="sm" defaultValue={["shipping"]} collapsible width="full" maxW="md">
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
      <Accordion.Root size="md" defaultValue={["shipping"]} collapsible width="full" maxW="md">
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
      <Accordion.Root size="lg" defaultValue={["shipping"]} collapsible width="full" maxW="md">
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
