import { BottomNavBar } from "@isbatak/solid-ui/bottom-nav-bar"
import { Icon } from "@isbatak/solid-ui/icon"
import { Ripple } from "@isbatak/solid-ui/ripple"

export function BottomNavBarWithRippleDemo() {
  return (
    <BottomNavBar.Root w="full" maxW="md" borderWidth="1px" borderRadius="l3">
      <Ripple
        asChild={(props) => (
          <BottomNavBar.Item {...props()} href="#home" aria-current="page">
            <BottomNavBar.ItemIcon>
              <Icon name="home" />
            </BottomNavBar.ItemIcon>
            <BottomNavBar.ItemLabel>Home</BottomNavBar.ItemLabel>
          </BottomNavBar.Item>
        )}
      />
      <Ripple
        asChild={(props) => (
          <BottomNavBar.Item {...props()} href="#search">
            <BottomNavBar.ItemIcon>
              <Icon name="search" />
            </BottomNavBar.ItemIcon>
            <BottomNavBar.ItemLabel>Search</BottomNavBar.ItemLabel>
          </BottomNavBar.Item>
        )}
      />
      <Ripple
        asChild={(props) => (
          <BottomNavBar.Item {...props()} href="#profile">
            <BottomNavBar.ItemIcon>
              <Icon name="account" />
            </BottomNavBar.ItemIcon>
            <BottomNavBar.ItemLabel>Profile</BottomNavBar.ItemLabel>
          </BottomNavBar.Item>
        )}
      />
    </BottomNavBar.Root>
  )
}
