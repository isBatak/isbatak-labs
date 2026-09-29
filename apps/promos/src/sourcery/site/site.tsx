import { Button } from "@isbatak/react-ui/button"
import { Box, HStack, styled } from "@isbatak/panda-ds/jsx"

import { ContrastIcon, GithubIcon, PointerIcon } from "./icons"
import { ToolHero } from "./tool-hero"

function SiteHeader() {
  return (
    <styled.header height="56px" bg="bg">
      <HStack width="1072px" height="full" mx="auto" gap="4">
        <styled.span color="fg" letterSpacing="tight" whiteSpace="nowrap">
          <styled.span fontWeight="bold">isBatak</styled.span>
          <styled.span fontWeight="light">/labs</styled.span>
        </styled.span>
        <Box width="1px" height="5" mx="2" bg="border" />
        <HStack gap="5" textStyle="sm" fontWeight="medium" letterSpacing="wide">
          <styled.span color="fg.muted">Components</styled.span>
          <styled.span color="fg">Tools</styled.span>
        </HStack>
        <Box flex="1" />
        <HStack gap="1" color="fg">
          <Button variant="ghost" size="xs" aria-label="GitHub repository">
            <GithubIcon />
          </Button>
          <Box width="1px" height="5" mx="2" bg="border" />
          <Button variant="ghost" size="xs" aria-label="Radius">
            <PointerIcon />
          </Button>
          <Button variant="ghost" size="xs" aria-label="Color mode">
            <ContrastIcon />
          </Button>
        </HStack>
      </HStack>
    </styled.header>
  )
}

export function Site() {
  return (
    <Box width="1440px" height="820px" overflow="hidden" bg="bg" color="fg">
      <SiteHeader />
      <ToolHero />
    </Box>
  )
}
