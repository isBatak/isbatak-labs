"use client"

import { Tabs } from "@isbatak/react-ui/tabs"
import { Children, isValidElement, type ReactNode } from "react"

import { Icon, type IconName } from "../ui/icon"

interface TabProps {
  value: string
  label: string
  icon?: IconName
  children: ReactNode
}

export function Tab({ children }: TabProps) {
  return <>{children}</>
}

export function DocTabs({ children }: { children: ReactNode }) {
  const tabs = Children.toArray(children).filter(isValidElement<TabProps>)

  return (
    <Tabs.Root defaultValue={tabs[0]?.props.value} variant="line" size="sm" my="6">
      <Tabs.List className="not-prose" overflowX="auto">
        {tabs.map((tab) => (
          <Tabs.Trigger key={tab.props.value} value={tab.props.value} gap="2">
            {tab.props.icon && <Icon name={tab.props.icon} />}
            {tab.props.label}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator />
      </Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Content key={tab.props.value} value={tab.props.value}>
          {tab.props.children}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
