import { Portal } from "@ark-ui/react/portal"
import { Breadcrumb } from "@isbatak/react-ui/breadcrumb"
import { Icon } from "@isbatak/react-ui/icon"
import { Menu } from "@isbatak/react-ui/menu"
import { css } from "styled-system/css"

export function BreadcrumbMenuDemo() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Menu.Root>
            <Menu.Trigger asChild>
              <button
                className={css({
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "1",
                  color: "fg.muted",
                  cursor: "button",
                  borderRadius: "l1",
                  _hover: { color: "fg" },
                })}
              >
                Components
                <Icon name="chevron-down" />
              </button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="theming">Theming</Menu.Item>
                  <Menu.Item value="props">Props</Menu.Item>
                  <Menu.Item value="customization">Customization</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}
