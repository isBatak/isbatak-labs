import { BottomNavBar } from "@isbatak/react-ui/bottom-nav-bar"
import { Icon } from "@isbatak/react-ui/icon"
import { Ripple } from "@isbatak/react-ui/ripple"

export function BottomNavBarWithRippleDemo() {
  return (
    <BottomNavBar.Root w="full" maxW="md" borderWidth="1px" borderRadius="l3">
      <Ripple asChild>
        <BottomNavBar.Item href="#home" aria-current="page">
          <BottomNavBar.ItemIcon>
            <Icon name="home" />
          </BottomNavBar.ItemIcon>
          <BottomNavBar.ItemLabel>Home</BottomNavBar.ItemLabel>
        </BottomNavBar.Item>
      </Ripple>
      <Ripple asChild>
        <BottomNavBar.Item href="#search">
          <BottomNavBar.ItemIcon>
            <Icon name="search" />
          </BottomNavBar.ItemIcon>
          <BottomNavBar.ItemLabel>Search</BottomNavBar.ItemLabel>
        </BottomNavBar.Item>
      </Ripple>
      <Ripple asChild>
        <BottomNavBar.Item href="#profile">
          <BottomNavBar.ItemIcon>
            <Icon name="account" />
          </BottomNavBar.ItemIcon>
          <BottomNavBar.ItemLabel>Profile</BottomNavBar.ItemLabel>
        </BottomNavBar.Item>
      </Ripple>
    </BottomNavBar.Root>
  )
}
