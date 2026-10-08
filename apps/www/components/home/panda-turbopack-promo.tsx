import { Button } from "@isbatak/react-ui/button"
import Link from "next/link"
import { styled } from "styled-system/jsx"

import { CodeBlock } from "../code/code-block"
import { Icon } from "../ui/icon"
import { Eyebrow, Section } from "./section"

const nextConfig = `import type { NextConfig } from "next"
import { withPandaCss } from "@isbatak/panda-turbopack/next"

const nextConfig: NextConfig = {}

export default withPandaCss(nextConfig)`

const globalsCss = `@layer reset, base, tokens, recipes, utilities;`

const Point = styled("li", {
  base: {
    display: "flex",
    alignItems: "flex-start",
    gap: "2.5",
    textStyle: "sm",
    lineHeight: "1.6",
    "& > svg": { flexShrink: "0", mt: "0.5", color: "fg.subtle" },
  },
})

export function PandaTurbopackPromo() {
  return (
    <Section>
      <styled.div py={{ base: "16", md: "24" }} borderTopWidth="1px">
        <styled.div
          display="grid"
          gap={{ base: "10", md: "8" }}
          gridTemplateColumns={{ md: "repeat(12, minmax(0, 1fr))" }}
          alignItems="center"
        >
          <styled.div gridColumn={{ md: "span 5 / span 5" }}>
            <Eyebrow>Tools</Eyebrow>
            <styled.h2
              mt="3"
              textStyle={{ base: "3xl", md: "4xl" }}
              fontWeight="medium"
              letterSpacing="tight"
              textWrap="balance"
            >
              Panda CSS on Turbopack, without the CLI.
            </styled.h2>
            <styled.p mt="4" maxW="sm" textStyle="sm" lineHeight="1.7" color="fg.muted" textWrap="pretty">
              <styled.code fontFamily="mono">@isbatak/panda-turbopack</styled.code> runs Panda CSS v2 inside{" "}
              <styled.code fontFamily="mono">next dev</styled.code> and{" "}
              <styled.code fontFamily="mono">next build</styled.code>. Wrap your config once and drop the watch process
              and the PostCSS plugin.
            </styled.p>
            <styled.ul mt="6" display="flex" flexDirection="column" gap="2.5">
              <Point>
                <Icon name="check" />
                Codegen runs when Next.js loads the config
              </Point>
              <Point>
                <Icon name="check" />
                The generated CSS updates as you edit
              </Point>
              <Point>
                <Icon name="check" />
                Style props compile to static class names
              </Point>
            </styled.ul>
            <styled.div display="flex" flexWrap="wrap" gap="3" mt="8">
              <Button asChild>
                <Link href="/tools/panda-turbopack" prefetch>
                  Read the docs
                  <Icon name="arrow-right" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://www.npmjs.com/package/@isbatak/panda-turbopack" target="_blank" rel="noopener">
                  <Icon name="brand-npm" />
                  npm
                </a>
              </Button>
            </styled.div>
          </styled.div>

          <styled.div gridColumn={{ md: "span 7 / span 7" }} minW="0">
            <CodeBlock title="next.config.ts" code={nextConfig} lang="ts" />
            <CodeBlock title="app/globals.css" code={globalsCss} lang="css" />
          </styled.div>
        </styled.div>
      </styled.div>
    </Section>
  )
}
