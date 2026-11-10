import { Accordion } from "@isbatak/react-ui/accordion"
import { Icon } from "@isbatak/react-ui/icon"

export function AccordionWithIconDemo() {
  return (
    <Accordion.Root defaultValue={["notifications"]} collapsible width="full" maxW="md">
      <Accordion.Item value="notifications">
        <Accordion.ItemTrigger>
          <Icon name="bell" color="fg.muted" />
          Notifications
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>Choose which emails and push notifications you get.</Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="privacy">
        <Accordion.ItemTrigger>
          <Icon name="lock" color="fg.muted" />
          Privacy
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>Decide who can see your profile and activity.</Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="settings">
        <Accordion.ItemTrigger>
          <Icon name="settings" color="fg.muted" />
          Preferences
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>Set your language, time zone and theme.</Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  )
}
