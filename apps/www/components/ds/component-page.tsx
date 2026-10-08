import type { Component } from "#site/content"
import Link from "next/link"
import { styled } from "styled-system/jsx"

import { CodeBlock } from "../code/code-block"
import { ResourceLink } from "../docs/resource-link"
import { demos } from "../ds-demos"
import { REPO_URL } from "../layout/site-links"
import { MDXContent } from "../mdx-content"
import { Icon } from "../ui/icon"
import { Prose } from "../ui/prose"

const BreadcrumbLink = styled(Link, {
  base: {
    color: "fg.muted",
    _hover: { color: "fg" },
  },
})

const frameworkLabels = { react: "React", vue: "Vue", solid: "Solid", svelte: "Svelte" }

const repoUrl = (path: string) => `${REPO_URL}/tree/main/${path}`

interface ComponentPageProps {
  component: Component
  source: string
}

export function ComponentPage({ component, source }: ComponentPageProps) {
  const { title, description, frameworks, links } = component
  const Demo = demos[component.slug]

  return (
    <styled.div maxW="3xl" mx="auto" pt={{ base: "10", md: "16" }} pb="24">
      <styled.nav aria-label="Breadcrumb" display="flex" alignItems="center" gap="2" textStyle="sm">
        <BreadcrumbLink href="/ds/components">Design system</BreadcrumbLink>
        <Icon name="chevron-right" color="fg.subtle" />
        <styled.span color="fg" aria-current="page">
          {title}
        </styled.span>
      </styled.nav>

      <styled.h1 mt="8" textStyle={{ base: "4xl", md: "5xl" }} fontWeight="semibold" letterSpacing="tight">
        {title}
      </styled.h1>
      <styled.p mt="4" color="fg.muted" textStyle="md" lineHeight="1.8" maxW="2xl">
        {description}
      </styled.p>

      <styled.p mt="3" textStyle="sm" color="fg.subtle">
        {new Intl.ListFormat("en", { type: "conjunction" }).format(
          frameworks.map((framework) => frameworkLabels[framework]),
        )}
      </styled.p>

      <styled.div display="flex" flexWrap="wrap" columnGap="6" rowGap="3" mt="6">
        <ResourceLink href={repoUrl(links.source)} icon="brand-github">
          Source
        </ResourceLink>
        {links.recipe && (
          <ResourceLink href={repoUrl(links.recipe)} icon="brand-github">
            Recipe
          </ResourceLink>
        )}
        {links.ark && (
          <ResourceLink href={links.ark} icon="brand-ark">
            Ark UI docs
          </ResourceLink>
        )}
      </styled.div>

      {Demo && (
        <styled.div
          display="flex"
          alignItems="center"
          justifyContent="center"
          minH="72"
          mt="10"
          mb="8"
          p="8"
          borderRadius="l3"
          borderWidth="1px"
          bg="bg.subtle"
        >
          <Demo />
        </styled.div>
      )}

      <Prose>
        <MDXContent code={component.code} />
        <h2>Usage</h2>
        <CodeBlock code={source} lang="tsx" />
      </Prose>
    </styled.div>
  )
}
