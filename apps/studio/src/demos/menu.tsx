import { Button } from "@isbatak/react-ui/button"
import { Menu } from "@isbatak/react-ui/menu"
import { Portal } from "@ark-ui/react/portal"

import { Section, StaticOverlay } from "../canvas/layout"
import type { SampleProps } from "./types"

function MenuItems() {
  return (
    <Menu.Content>
      <Menu.Item value="new">New file</Menu.Item>
      <Menu.Item value="open">Open…</Menu.Item>
      <Menu.Separator />
      <Menu.Item value="delete" color="fg.error">
        Delete
      </Menu.Item>
    </Menu.Content>
  )
}

export function MenuSample(props: SampleProps) {
  return (
    <StaticOverlay>
      <Menu.Root open {...props}>
        <Menu.Positioner>
          <MenuItems />
        </Menu.Positioner>
      </Menu.Root>
    </StaticOverlay>
  )
}

export function MenuDemo() {
  return (
    <>
      <Section title="Interactive">
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button variant="outline">Open menu</Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <MenuItems />
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Section>
      <Section title="Open">
        <MenuSample />
      </Section>
    </>
  )
}
