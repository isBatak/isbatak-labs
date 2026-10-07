"use client"

import { Button } from "@isbatak/react-ui/button"
import { Group } from "@isbatak/react-ui/group"

export function GroupDemo() {
  return (
    <Group attached>
      <Button variant="outline">Day</Button>
      <Button variant="outline">Week</Button>
      <Button variant="outline">Month</Button>
    </Group>
  )
}
