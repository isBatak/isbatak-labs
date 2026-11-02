"use client"

import { Kbd, KbdGroup } from "@isbatak/react-ui/kbd"
import { Stack } from "styled-system/jsx"

export function KbdGroupDemo() {
  return (
    <Stack gap="4" alignItems="flex-start">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup size="sm" variant="subtle">
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>Shift</Kbd>
        <span>+</span>
        <Kbd>P</Kbd>
      </KbdGroup>
    </Stack>
  )
}
