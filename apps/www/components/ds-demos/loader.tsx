"use client"

import { Loader } from "@isbatak/react-ui/loader"
import { HStack, styled } from "styled-system/jsx"

export function LoaderDemo() {
  return (
    <HStack gap="6">
      <styled.span position="relative" display="inline-flex">
        <Loader>Hidden while loading</Loader>
      </styled.span>
      <styled.span display="inline-flex" alignItems="center" gap="2">
        <Loader text="Loading…" />
      </styled.span>
    </HStack>
  )
}
