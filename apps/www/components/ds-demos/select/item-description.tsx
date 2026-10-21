"use client"

import { Portal } from "@ark-ui/react/portal"
import { createListCollection, Select } from "@isbatak/react-ui/select"
import { Stack, styled } from "styled-system/jsx"

const plans = createListCollection({
  items: [
    { label: "Free", value: "free", description: "For personal projects. 1 seat." },
    { label: "Pro", value: "pro", description: "For small teams. Up to 10 seats." },
    { label: "Enterprise", value: "enterprise", description: "Unlimited seats, SSO and audit logs." },
  ],
})

export function SelectItemDescriptionDemo() {
  return (
    <Select.Root collection={plans} maxW="xs">
      <Select.HiddenSelect />
      <Select.Label>Plan</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select plan" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            <Select.Item item={{ label: "Free", value: "free", description: "For personal projects. 1 seat." }}>
              <Stack gap="0" flex="1">
                <Select.ItemText>Free</Select.ItemText>
                <styled.span textStyle="xs" color="fg.muted">
                  For personal projects. 1 seat.
                </styled.span>
              </Stack>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item item={{ label: "Pro", value: "pro", description: "For small teams. Up to 10 seats." }}>
              <Stack gap="0" flex="1">
                <Select.ItemText>Pro</Select.ItemText>
                <styled.span textStyle="xs" color="fg.muted">
                  For small teams. Up to 10 seats.
                </styled.span>
              </Stack>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item
              item={{ label: "Enterprise", value: "enterprise", description: "Unlimited seats, SSO and audit logs." }}
            >
              <Stack gap="0" flex="1">
                <Select.ItemText>Enterprise</Select.ItemText>
                <styled.span textStyle="xs" color="fg.muted">
                  Unlimited seats, SSO and audit logs.
                </styled.span>
              </Stack>
              <Select.ItemIndicator />
            </Select.Item>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}
