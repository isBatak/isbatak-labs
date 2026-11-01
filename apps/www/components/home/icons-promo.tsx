import { Button } from "@isbatak/react-ui/button"
import Link from "next/link"
import { styled } from "styled-system/jsx"

import { Icon } from "../ui/icon"
import { Eyebrow, Section } from "./section"

const Orbit = styled("div", {
  base: {
    position: "absolute",
    inset: "0",
    display: "grid",
    placeItems: "center",
  },
})

const Tile = styled("div", {
  base: {
    display: "grid",
    placeItems: "center",
    bg: "bg.panel",
    color: "fg",
    borderWidth: "1px",
    borderRadius: "l2",
    boxShadow: "sm",
    animationName: "fly-from-center",
    animationDuration: "slowest",
    animationTimingFunction: "ease-out",
    animationFillMode: "both",
    "@supports (animation-timeline: view())": {
      animationTimeline: "view()",
      animationRange: "entry 20% cover 45%",
      animationDelay: "0s",
    },
    _motionReduce: { animation: "none" },
  },
})

export function IconsPromo() {
  return (
    <Section>
      <styled.div py={{ base: "16", md: "24" }} borderTopWidth="1px">
        <styled.div
          display="grid"
          gap={{ base: "10", md: "12" }}
          gridTemplateColumns={{ md: "repeat(12, minmax(0, 1fr))" }}
          alignItems="center"
        >
          <styled.div
            gridColumn={{ md: "span 7 / span 7" }}
            position="relative"
            aspectRatio={{ base: "square", sm: "wide" }}
            overflow="clip"
            borderWidth="1px"
            borderRadius="l3"
            aria-hidden
          >
            <Orbit rotate="-70deg">
              <Tile
                boxSize={{ base: "9", md: "11" }}
                translate={{ base: "0 calc({spacing.32} * -1)", md: "0 calc({spacing.52} * -1)" }}
                rotate="56deg"
              >
                <Icon name="heart" size="md" />
              </Tile>
            </Orbit>
            <Orbit rotate="-92deg">
              <Tile
                boxSize={{ base: "10", md: "12" }}
                translate={{ base: "0 calc({spacing.32} * -1)", md: "0 calc({spacing.60} * -1)" }}
                rotate="99deg"
                animationDelay="fast"
              >
                <Icon name="code-braces" size="lg" />
              </Tile>
            </Orbit>
            <Orbit rotate="-32deg">
              <Tile
                boxSize={{ base: "11", md: "14" }}
                translate={{ base: "0 calc({spacing.24} * -1)", md: "0 calc({spacing.32} * -1)" }}
                rotate="41deg"
                animationDelay="faster"
              >
                <Icon name="star" size="lg" />
              </Tile>
            </Orbit>
            <Orbit rotate="12deg">
              <Tile
                boxSize={{ base: "8", md: "10" }}
                translate={{ base: "0 calc({spacing.28} * -1)", md: "0 calc({spacing.36} * -1)" }}
                rotate="-15deg"
                animationDelay="fast"
              >
                <Icon name="bell" size="md" />
              </Tile>
            </Orbit>
            <Orbit rotate="48deg">
              <Tile
                boxSize={{ base: "12", md: "16" }}
                translate={{ base: "0 calc({spacing.28} * -1)", md: "0 calc({spacing.44} * -1)" }}
                rotate="-31deg"
                animationDelay="faster"
              >
                <Icon name="sparkles" size="xl" />
              </Tile>
            </Orbit>
            <Orbit rotate="75deg">
              <Tile
                boxSize={{ base: "8", md: "9" }}
                translate={{ base: "0 calc({spacing.32} * -1)", md: "0 calc({spacing.64} * -1)" }}
                rotate="-96deg"
                animationDelay="fast"
              >
                <Icon name="image" size="sm" />
              </Tile>
            </Orbit>
            <Orbit rotate="103deg">
              <Tile
                boxSize={{ base: "10", md: "12" }}
                translate={{ base: "0 calc({spacing.32} * -1)", md: "0 calc({spacing.56} * -1)" }}
                rotate="-114deg"
                animationDelay="faster"
              >
                <Icon name="mail" size="lg" />
              </Tile>
            </Orbit>
            <Orbit rotate="141deg">
              <Tile
                boxSize={{ base: "11", md: "14" }}
                translate={{ base: "0 calc({spacing.24} * -1)", md: "0 calc({spacing.36} * -1)" }}
                rotate="-135deg"
                animationDelay="fast"
              >
                <Icon name="settings" size="lg" />
              </Tile>
            </Orbit>
            <Orbit rotate="-168deg">
              <Tile
                boxSize={{ base: "9", md: "10" }}
                translate={{ base: "0 calc({spacing.28} * -1)", md: "0 calc({spacing.36} * -1)" }}
                rotate="149deg"
                animationDelay="faster"
              >
                <Icon name="search" size="md" />
              </Tile>
            </Orbit>
            <Orbit rotate="-118deg">
              <Tile
                boxSize={{ base: "12", md: "14" }}
                translate={{ base: "0 calc({spacing.28} * -1)", md: "0 calc({spacing.48} * -1)" }}
                rotate="131deg"
                animationDelay="fast"
              >
                <Icon name="play" size="lg" />
              </Tile>
            </Orbit>
            <styled.div
              position="absolute"
              inset="0"
              m="auto"
              zIndex="1"
              display="grid"
              placeItems="center"
              boxSize={{ base: "24", md: "32" }}
              bg="purple.700"
              color="yellow.200"
              borderRadius="l3"
              boxShadow="lg"
            >
              <Icon name="boring-logo" boxSize={{ base: "12", md: "16" }} />
            </styled.div>
          </styled.div>

          <styled.div gridColumn={{ md: "span 5 / span 5" }}>
            <Eyebrow>Icons</Eyebrow>
            <styled.h2
              mt="3"
              textStyle={{ base: "3xl", md: "4xl" }}
              fontWeight="medium"
              letterSpacing="tight"
              textWrap="balance"
            >
              Boring Icons, in every framework.
            </styled.h2>
            <styled.p mt="4" maxW="sm" textStyle="sm" lineHeight="1.7" color="fg.muted" textWrap="pretty">
              Plain line icons designed by Goran Tomičić, in one SVG sprite with a typed{" "}
              <styled.code fontFamily="mono">Icon</styled.code> component for React, Vue, Svelte, Solid, Preact and Lit.
            </styled.p>
            <styled.div mt="8">
              <Button asChild>
                <Link href="/ds/icons" prefetch>
                  Browse the icons
                  <Icon name="arrow-right" />
                </Link>
              </Button>
            </styled.div>
          </styled.div>
        </styled.div>
      </styled.div>
    </Section>
  )
}
