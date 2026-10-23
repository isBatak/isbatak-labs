"use client"

import { NavigationMenu } from "@isbatak/react-ui/navigation-menu"
import { styled } from "styled-system/jsx"

import { Icon } from "../ui/icon"

export function NavigationMenuDemo() {
  return (
    <styled.div alignSelf="start" h="64" pt="6">
      <NavigationMenu.Root aria-label="Product">
        <NavigationMenu.List>
          <NavigationMenu.Indicator />
          <NavigationMenu.Item value="product">
            <NavigationMenu.Trigger>
              Product
              <Icon name="chevron-down" />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content w="xs">
              <NavigationMenu.Link href="#analytics">
                <styled.span textStyle="sm" fontWeight="medium">
                  Analytics
                </styled.span>
                <styled.span textStyle="xs" color="fg.muted">
                  See how visitors find and use your site.
                </styled.span>
              </NavigationMenu.Link>
              <NavigationMenu.Link href="#automations">
                <styled.span textStyle="sm" fontWeight="medium">
                  Automations
                </styled.span>
                <styled.span textStyle="xs" color="fg.muted">
                  Run tasks when something changes.
                </styled.span>
              </NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item value="resources">
            <NavigationMenu.Trigger>
              Resources
              <Icon name="chevron-down" />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content w="xs">
              <NavigationMenu.Link href="#docs">
                <styled.span textStyle="sm" fontWeight="medium">
                  Documentation
                </styled.span>
                <styled.span textStyle="xs" color="fg.muted">
                  Guides and API reference.
                </styled.span>
              </NavigationMenu.Link>
              <NavigationMenu.Link href="#changelog">
                <styled.span textStyle="sm" fontWeight="medium">
                  Changelog
                </styled.span>
                <styled.span textStyle="xs" color="fg.muted">
                  What shipped this month.
                </styled.span>
              </NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <NavigationMenu.ViewportPositioner align="start">
          <NavigationMenu.Viewport />
        </NavigationMenu.ViewportPositioner>
      </NavigationMenu.Root>
    </styled.div>
  )
}
