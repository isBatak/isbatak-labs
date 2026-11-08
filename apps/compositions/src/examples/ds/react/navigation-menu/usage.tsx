import { NavigationMenu } from "@isbatak/react-ui/navigation-menu"
import { styled } from "styled-system/jsx"

import { Icon } from "@isbatak/react-ui/icon"

const ContentLink = styled("a", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    px: "3",
    py: "2.5",
    borderRadius: "l2",
    transitionProperty: "background",
    transitionDuration: "fast",
    _hover: { bg: "bg.muted" },
    _focusVisible: { bg: "bg.muted" },
    _currentPage: { bg: "bg.muted" },
  },
})

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
              <ContentLink href="#analytics">
                <styled.span textStyle="sm" fontWeight="medium">
                  Analytics
                </styled.span>
                <styled.span textStyle="xs" color="fg.muted">
                  See how visitors find and use your site.
                </styled.span>
              </ContentLink>
              <ContentLink href="#automations">
                <styled.span textStyle="sm" fontWeight="medium">
                  Automations
                </styled.span>
                <styled.span textStyle="xs" color="fg.muted">
                  Run tasks when something changes.
                </styled.span>
              </ContentLink>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item value="resources">
            <NavigationMenu.Trigger>
              Resources
              <Icon name="chevron-down" />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content w="xs">
              <ContentLink href="#docs">
                <styled.span textStyle="sm" fontWeight="medium">
                  Documentation
                </styled.span>
                <styled.span textStyle="xs" color="fg.muted">
                  Guides and API reference.
                </styled.span>
              </ContentLink>
              <ContentLink href="#changelog">
                <styled.span textStyle="sm" fontWeight="medium">
                  Changelog
                </styled.span>
                <styled.span textStyle="xs" color="fg.muted">
                  What shipped this month.
                </styled.span>
              </ContentLink>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item value="pricing">
            <NavigationMenu.Link href="#pricing">Pricing</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <NavigationMenu.ViewportPositioner align="start">
          <NavigationMenu.Viewport />
        </NavigationMenu.ViewportPositioner>
      </NavigationMenu.Root>
    </styled.div>
  )
}
