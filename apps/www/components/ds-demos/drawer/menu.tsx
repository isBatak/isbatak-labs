"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import { styled } from "styled-system/jsx"

import { Icon } from "../../ui/icon"

const Avatar = styled("span", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    boxSize: "9",
    rounded: "full",
    bg: "colorPalette.solid",
    color: "colorPalette.contrast",
    textStyle: "xs",
    fontWeight: "semibold",
  },
})

const MenuItem = styled("button", {
  base: {
    display: "grid",
    gridTemplateColumns: "subgrid",
    gridColumn: "1 / -1",
    alignItems: "center",
    w: "full",
    px: "3",
    py: "2",
    rounded: "l2",
    textAlign: "start",
    cursor: "pointer",
    _hover: { bg: "bg.muted" },
    _focusVisible: { outline: "2px solid", outlineColor: "colorPalette.focusRing" },
  },
})

const MenuGroup = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    columnGap: "3",
    px: "3",
    py: "3",
    borderBottomWidth: "1px",
    _last: { borderBottomWidth: "0" },
  },
})

export function DrawerMenuDemo() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="plain" px="0" rounded="full" aria-label="Open account menu">
          <Avatar>KC</Avatar>
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header borderBottomWidth="1px" pt="4" pb="4" gap="3">
              <Avatar>KC</Avatar>
              <div>
                <Drawer.Title textStyle="md">Kurt Cobain</Drawer.Title>
                <Drawer.Description>@cobain</Drawer.Description>
              </div>
            </Drawer.Header>
            <Drawer.Body px="0" py="0">
              <MenuGroup>
                <MenuItem>
                  <Icon name="home" />
                  Your profile
                </MenuItem>
                <MenuItem>
                  <Icon name="code" />
                  Your repositories
                </MenuItem>
                <MenuItem>
                  <Icon name="sparkles" />
                  Assistant
                </MenuItem>
                <MenuItem>
                  <Icon name="components" />
                  Your projects
                </MenuItem>
                <MenuItem>
                  <Icon name="star_filled" />
                  Your stars
                </MenuItem>
                <MenuItem>
                  <Icon name="heart" />
                  Your sponsors
                </MenuItem>
              </MenuGroup>
              <MenuGroup>
                <MenuItem>
                  <Icon name="settings" />
                  Settings
                </MenuItem>
                <MenuItem>
                  <span />
                  Feature preview
                </MenuItem>
              </MenuGroup>
              <MenuGroup>
                <MenuItem>
                  <Icon name="file" />
                  Docs
                </MenuItem>
                <MenuItem>
                  <Icon name="info-circle" />
                  Support
                </MenuItem>
              </MenuGroup>
            </Drawer.Body>
            <Drawer.Footer borderTopWidth="1px" pt="4">
              <Button variant="outline" w="full" justifyContent="space-between">
                Sign out
                <Icon name="arrow-right" />
              </Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
