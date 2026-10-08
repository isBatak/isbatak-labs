import type { Tool } from "#site/content"
import { Badge } from "@isbatak/react-ui/badge"
import { Button } from "@isbatak/react-ui/button"
import Link from "next/link"
import { styled } from "styled-system/jsx"

import { ResourceLink } from "../docs/resource-link"
import { Eyebrow, Section } from "../home/section"
import { REPO_URL } from "../layout/site-links"
import { MDXContent } from "../mdx-content"
import { Icon } from "../ui/icon"
import { Prose } from "../ui/prose"
import { toolComponents } from "./mdx-components"
import { PackageInstall } from "./package-install"
import { VideoDemo } from "./video-demo"

const Bone = styled("div", {
  base: {
    bg: "bg.muted",
    rounded: "l2",
    animation: "pulse",
  },
})

export function ToolPageSkeleton() {
  return (
    <Section aria-busy="true">
      <styled.div maxW="2xl" mx="auto" pt={{ base: "16", md: "28" }} textAlign="center">
        <styled.nav aria-label="Breadcrumb" display="flex" justifyContent="center" alignItems="center" gap="2">
          <Link href="/tools">
            <Eyebrow>Tools</Eyebrow>
          </Link>
          <Icon name="chevron-right" color="fg.subtle" />
          <Bone w="20" h="3" />
        </styled.nav>
        <styled.div display="flex" flexDirection="column" alignItems="center">
          <Bone w={{ base: "64", md: "96" }} h={{ base: "10", md: "14" }} mt="5" />
          <Bone w="40" h="4" mt="5" />
          <Bone w="full" maxW="md" h="4" mt="6" />
          <Bone w="3/4" maxW="sm" h="4" mt="2" />
          <Bone w="full" maxW="md" h="24" mt="8" />
        </styled.div>
      </styled.div>
    </Section>
  )
}

export function ToolPage({ tool }: { tool: Tool }) {
  return (
    <Section>
      <styled.div maxW="2xl" mx="auto" pt={{ base: "16", md: "28" }} textAlign="center">
        <styled.nav aria-label="Breadcrumb" display="flex" justifyContent="center" alignItems="center" gap="2">
          <Link href="/tools">
            <Eyebrow>Tools</Eyebrow>
          </Link>
          <Icon name="chevron-right" color="fg.subtle" />
          <Eyebrow>{tool.category}</Eyebrow>
          {tool.status === "new" && <Badge colorPalette="green">New</Badge>}
          {tool.status === "beta" && <Badge colorPalette="orange">Beta</Badge>}
        </styled.nav>

        <styled.h1
          mt="5"
          textStyle={{ base: "4xl", sm: "5xl", md: "6xl" }}
          fontWeight="medium"
          lineHeight="1"
          letterSpacing="tighter"
          textWrap="balance"
        >
          {tool.wordmark ? (
            <styled.img src={tool.wordmark} alt={tool.title} w="full" maxW="xl" mx="auto" />
          ) : (
            tool.title
          )}
        </styled.h1>
        <styled.p mt="4" fontFamily="mono" textStyle="sm" color="fg.subtle">
          {tool.package}
        </styled.p>
        <styled.p mt="5" mx="auto" maxW="lg" color="fg.muted" lineHeight="1.7" textWrap="pretty">
          {tool.description}
        </styled.p>

        <styled.div mx="auto" maxW="md" mt="8">
          <PackageInstall name={tool.package} dev />
        </styled.div>

        <styled.div display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" columnGap="6" rowGap="3">
          {tool.links.npm && (
            <Button asChild variant="outline" size="sm">
              <a href={tool.links.npm} target="_blank" rel="noopener">
                <Icon name="brand-npm" />
                npm
              </a>
            </Button>
          )}
          {tool.links.source && (
            <ResourceLink href={`${REPO_URL}/tree/main/${tool.links.source}`} icon="brand-github">
              Source
            </ResourceLink>
          )}
        </styled.div>
      </styled.div>

      {tool.video && (
        <styled.section aria-label="Video demo" maxW="4xl" mx="auto" mt={{ base: "14", md: "20" }}>
          <styled.div textAlign="center" mb="5">
            <Eyebrow>Demo</Eyebrow>
          </styled.div>
          <VideoDemo src={tool.video} poster={tool.poster} title={`${tool.title} demo`} />
        </styled.section>
      )}

      <styled.div maxW="2xl" mx="auto" pt={{ base: "10", md: "14" }} pb="24">
        <Prose>
          <MDXContent code={tool.code} components={toolComponents} />
        </Prose>
      </styled.div>
    </Section>
  )
}
