"use client"

import { Kbd } from "@isbatak/react-ui/kbd"
import { styled } from "styled-system/jsx"

export function KbdWithinTextDemo() {
  return (
    <styled.p textStyle="sm">
      Press <Kbd>F12</Kbd> to open the developer tools.
    </styled.p>
  )
}
