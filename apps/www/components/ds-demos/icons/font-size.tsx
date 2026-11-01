"use client"

import { Icon } from "@isbatak/react-ui/icon"
import { Stack, styled } from "styled-system/jsx"

export function IconsFontSizeDemo() {
  return (
    <Stack gap="4" alignItems="flex-start">
      <styled.span textStyle="xs">
        Small text <Icon name="arrow-right" />
      </styled.span>
      <styled.span textStyle="md">
        Body text <Icon name="arrow-right" />
      </styled.span>
      <styled.span textStyle="2xl">
        Large text <Icon name="arrow-right" />
      </styled.span>
    </Stack>
  )
}
