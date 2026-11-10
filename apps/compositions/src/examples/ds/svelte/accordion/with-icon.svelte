<script lang="ts">
  import { Accordion } from "@isbatak/svelte-ui/accordion"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { css } from "styled-system/css"
</script>

<Accordion.Root defaultValue={["notifications"]} collapsible class={css({ width: "full", maxW: "md" })}>
  <Accordion.Item value="notifications">
    <Accordion.ItemTrigger>
      <Icon name="bell" class={css({ color: "fg.muted" })} />
      Notifications
      <Accordion.ItemIndicator />
    </Accordion.ItemTrigger>
    <Accordion.ItemContent>
      <Accordion.ItemBody>Choose which emails and push notifications you get.</Accordion.ItemBody>
    </Accordion.ItemContent>
  </Accordion.Item>
  <Accordion.Item value="privacy">
    <Accordion.ItemTrigger>
      <Icon name="lock" class={css({ color: "fg.muted" })} />
      Privacy
      <Accordion.ItemIndicator />
    </Accordion.ItemTrigger>
    <Accordion.ItemContent>
      <Accordion.ItemBody>Decide who can see your profile and activity.</Accordion.ItemBody>
    </Accordion.ItemContent>
  </Accordion.Item>
  <Accordion.Item value="settings">
    <Accordion.ItemTrigger>
      <Icon name="settings" class={css({ color: "fg.muted" })} />
      Preferences
      <Accordion.ItemIndicator />
    </Accordion.ItemTrigger>
    <Accordion.ItemContent>
      <Accordion.ItemBody>Set your language, time zone and theme.</Accordion.ItemBody>
    </Accordion.ItemContent>
  </Accordion.Item>
</Accordion.Root>
