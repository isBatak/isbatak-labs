"use client"

import { Portal } from "@ark-ui/react/portal"
import { Tooltip } from "@isbatak/react-ui/tooltip"
import type { ReactNode } from "react"

import { Hint } from "../ui/hint"

export function Term({ tip, children }: { tip: string; children: ReactNode }) {
  return (
    <Hint.Root>
      <Tooltip.Root openDelay={200} positioning={{ placement: "top" }} lazyMount unmountOnExit>
        <Tooltip.Trigger asChild>
          <Hint.Trigger>
            {children}
            <Hint.Icon name="info-circle" />
          </Hint.Trigger>
        </Tooltip.Trigger>
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content maxW="xs">{tip}</Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
    </Hint.Root>
  )
}
