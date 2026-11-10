import { Accordion } from "@isbatak/react-ui/accordion"
import { Span } from "@isbatak/react-ui/span"
import { Stack } from "styled-system/jsx"

export function AccordionWithSubtextDemo() {
  return (
    <Accordion.Root defaultValue={["profile"]} collapsible width="full" maxW="md">
      <Accordion.Item value="profile">
        <Accordion.ItemTrigger>
          <Stack gap="0.5">
            <Span>Profile</Span>
            <Span textStyle="sm" color="fg.muted" fontWeight="normal">
              Shown on your public page
            </Span>
          </Stack>
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>Your name, photo and bio.</Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="security">
        <Accordion.ItemTrigger>
          <Stack gap="0.5">
            <Span>Security</Span>
            <Span textStyle="sm" color="fg.muted" fontWeight="normal">
              Keep your account safe
            </Span>
          </Stack>
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>Your password and two-factor authentication.</Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="billing">
        <Accordion.ItemTrigger>
          <Stack gap="0.5">
            <Span>Billing</Span>
            <Span textStyle="sm" color="fg.muted" fontWeight="normal">
              Manage your subscription
            </Span>
          </Stack>
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>Your plan, invoices and payment methods.</Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  )
}
