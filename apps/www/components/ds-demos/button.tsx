"use client"

import { Button } from "@isbatak/react-ui/button"
import { HStack } from "styled-system/jsx"

export function ButtonDemo() {
  return (
    <HStack gap="2" flexWrap="wrap" justifyContent="center">
      <Button variant="solid">Solid</Button>
      <Button variant="surface">Surface</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button loading>Save</Button>
    </HStack>
  )
}
