import { Button } from "@isbatak/react-ui/button"
import { styled } from "styled-system/jsx"

import { Eyebrow, Section } from "../home/section"
import { Icon } from "../ui/icon"

export function PlusHero() {
  return (
    <Section>
      <styled.div pt={{ base: "20", md: "36" }} pb={{ base: "16", md: "24" }} maxW="4xl">
        <Eyebrow>Plus · for agencies and freelancers</Eyebrow>
        <styled.h1
          mt="4"
          textStyle={{ base: "4xl", sm: "5xl", md: "6xl" }}
          fontWeight="medium"
          lineHeight="1"
          letterSpacing="tighter"
          textWrap="balance"
        >
          Ship accessible, agent-ready design systems to every client.
        </styled.h1>
        <styled.p
          mt="6"
          maxW="2xl"
          textStyle={{ base: "md", md: "lg" }}
          lineHeight="1.6"
          color="fg.muted"
          textWrap="pretty"
        >
          Premium blocks, Figma components with Code Connect mappings and an agent kit that builds screens from them.
          Agencies also get hands-on help from me.
        </styled.p>
        <styled.div display="flex" flexWrap="wrap" gap="3" mt="10">
          <Button asChild size="lg">
            <a href="#library">
              Browse the library
              <Icon name="arrow-down" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#plans">See plans</a>
          </Button>
        </styled.div>
      </styled.div>
    </Section>
  )
}
