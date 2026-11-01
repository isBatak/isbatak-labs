import { Button } from "@isbatak/react-ui/button"
import { card, link } from "@isbatak/panda-ds/recipes"
import { styled } from "styled-system/jsx"

import { Icon } from "../ui/icon"

const PORTFOLIO_URL = "https://goran-tomicic.xyz"

export function BoringIconsAuthor() {
  const classes = card({ variant: "outline" })

  return (
    <styled.div className={`not-prose ${classes.root}`} my="8">
      <styled.div className={classes.header} flexDirection="row" alignItems="center" gap="4">
        <styled.div
          display="grid"
          placeItems="center"
          flexShrink="0"
          boxSize="12"
          bg="purple.700"
          color="yellow.200"
          borderRadius="l2"
          aria-hidden
        >
          <Icon name="boring-logo" size="2xl" />
        </styled.div>
        <styled.div display="grid" gap="1">
          <styled.h2 className={classes.title}>Boring Icons</styled.h2>
          <styled.p className={classes.description}>An icon set to create UIs, like every other.</styled.p>
        </styled.div>
      </styled.div>
      <styled.div className={classes.body} gap="4">
        <styled.p textStyle="sm" lineHeight="1.7" color="fg.muted" maxW="xl" textWrap="pretty">
          Designed by{" "}
          <styled.a href={PORTFOLIO_URL} target="_blank" rel="noopener" className={link({ variant: "underline" })}>
            Goran Tomičić
          </styled.a>
          , a senior product designer in Zagreb with over a decade of product design across startups, agencies and
          enterprise. Boring Icons is his set of plain, geometric line icons, free and MIT licensed.
        </styled.p>
        <styled.nav aria-label="Goran Tomičić" display="flex" flexWrap="wrap" columnGap="5" rowGap="2" textStyle="sm">
          <styled.a href={PORTFOLIO_URL} target="_blank" rel="noopener" className={link()}>
            Portfolio
            <Icon name="external-link" color="fg.subtle" />
          </styled.a>
          <styled.a href="https://dribbble.com/goran_tomicic" target="_blank" rel="noopener" className={link()}>
            Dribbble
            <Icon name="external-link" color="fg.subtle" />
          </styled.a>
          <styled.a href="https://github.com/goran-tomicic" target="_blank" rel="noopener" className={link()}>
            GitHub
            <Icon name="external-link" color="fg.subtle" />
          </styled.a>
          <styled.a href="https://www.linkedin.com/in/goran-tomicic/" target="_blank" rel="noopener" className={link()}>
            LinkedIn
            <Icon name="external-link" color="fg.subtle" />
          </styled.a>
        </styled.nav>
      </styled.div>
      <styled.div className={classes.footer} flexWrap="wrap">
        <Button asChild size="sm">
          <a href={PORTFOLIO_URL} target="_blank" rel="noopener">
            Work with Goran
            <Icon name="arrow-right" />
          </a>
        </Button>
        <Button asChild size="sm" variant="outline">
          <a href="https://boring-icons.netlify.app" target="_blank" rel="noopener">
            Boring Icons site
            <Icon name="external-link" />
          </a>
        </Button>
        <Button asChild size="sm" variant="outline">
          <a href="https://www.npmjs.com/package/@boring-icons/react" target="_blank" rel="noopener">
            <Icon name="brand-npm" />
            @boring-icons/react
          </a>
        </Button>
      </styled.div>
    </styled.div>
  )
}
