import type { ReactNode } from "react"
import { styled } from "styled-system/jsx"

import { Icon } from "../ui/icon"

const Card = styled("aside", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "4",
    my: "6",
    p: "5",
    borderRadius: "l3",
    borderWidth: "1px",
    bg: "bg.subtle",
  },
})

const Row = styled("a", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "4",
    p: "3",
    borderRadius: "l2",
    color: "fg",
    transition: "background 0.15s",
    _hover: { bg: "bg.muted" },
    _focusVisible: { outline: "2px solid", outlineColor: "colorPalette.focusRing", outlineOffset: "2px" },
  },
})

function PullRequest({ number, label, children }: { number: number; label: string; children: ReactNode }) {
  return (
    <Row href={`https://github.com/chakra-ui/zag/pull/${number}`} target="_blank" rel="noopener">
      <styled.span
        display="grid"
        placeItems="center"
        flexShrink="0"
        w="10"
        h="10"
        borderRadius="l2"
        borderWidth="1px"
        bg="bg.default"
      >
        <Icon name="brand-github" />
      </styled.span>
      <styled.span display="flex" flexDirection="column" minW="0" flex="1">
        <styled.span fontFamily="mono" textStyle="sm" color="fg.muted">
          chakra-ui/zag #{number}
        </styled.span>
        <styled.span fontWeight="medium">{children}</styled.span>
      </styled.span>
      <styled.span
        flexShrink="0"
        px="2"
        py="0.5"
        borderRadius="full"
        borderWidth="1px"
        textStyle="xs"
        fontFamily="mono"
        color="fg.muted"
      >
        {label}
      </styled.span>
      <Icon name="arrow-up-right" color="fg.subtle" />
    </Row>
  )
}

export function UpstreamNotice() {
  return (
    <Card className="not-prose">
      <styled.div display="flex" alignItems="center" gap="3">
        <Icon name="sparkles" color="fg" />
        <styled.p fontWeight="semibold">Coming to Zag.js</styled.p>
      </styled.div>
      <styled.p textStyle="sm" color="fg.muted">
        This machine is being streamlined and merged into Zag.js, so it will ship in every framework adapter. The merge
        request is already open and waits on a prerequisite. Once both land, this page will point to the official
        package.
      </styled.p>
      <styled.div display="flex" flexDirection="column" gap="1">
        <PullRequest number={3317} label="wheel picker">
          Wheel picker machine
        </PullRequest>
        <PullRequest number={3335} label="prerequisite">
          Prerequisite for the wheel picker
        </PullRequest>
      </styled.div>
    </Card>
  )
}
