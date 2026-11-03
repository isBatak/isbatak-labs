import type { Component } from "#site/content"
import { Breadcrumb } from "@isbatak/react-ui/breadcrumb"
import Link from "next/link"
import { styled } from "styled-system/jsx"

import { CodeBlock } from "../code/code-block"
import { ResourceLink } from "../docs/resource-link"
import { demos } from "../ds-demos"
import { REPO_URL, STORYBOOK_URL } from "../layout/site-links"
import { MDXContent, type MDXComponents } from "../mdx-content"
import { Prose } from "../ui/prose"
import { DsApi, RecipeVariants } from "./ds-api"
import { DsDemo, DsDemoSource, hasDsDemo } from "./ds-demo"
import { demoSource } from "./demo-source"
import { DsDocLayout } from "./ds-doc-layout"
import { DsExample } from "./ds-example"
import type { DsFrameworkId } from "./ds-framework"
import { DsFrameworkPicker } from "./ds-framework-picker"

const repoUrl = (path: string) => `${REPO_URL}/tree/main/${path}`

interface ComponentPageProps {
  component: Component
  framework: DsFrameworkId
}

function Demo({ id, framework }: { id: string; framework: DsFrameworkId }) {
  return id in demos ? <DsExample id={id} /> : <DsDemo id={id} framework={framework} />
}

async function Usage({ id, framework }: { id: string; framework: DsFrameworkId }) {
  return id in demos ? (
    <CodeBlock code={await demoSource(id)} lang="tsx" />
  ) : (
    <DsDemoSource id={id} framework={framework} />
  )
}

export function ComponentPage({ component, framework }: ComponentPageProps) {
  const { title, description, links } = component
  const mdxComponents: MDXComponents = {
    Example: ({ id }: { id: string }) => <Demo id={id} framework={framework} />,
    Usage: () => <Usage id={component.slug} framework={framework} />,
    Api: () => <DsApi slug={component.slug} framework={framework} />,
    RecipeVariants: () => <RecipeVariants slug={component.slug} />,
  }

  return (
    <DsDocLayout section="components" toc={component.toc}>
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link asChild>
              <Link href="/ds/components">Components</Link>
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator>/</Breadcrumb.Separator>
          <Breadcrumb.Item>
            <DsFrameworkPicker slug={component.slug} framework={framework} />
          </Breadcrumb.Item>
          <Breadcrumb.Separator>/</Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>{title}</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>

      <styled.h1 mt="8" textStyle={{ base: "4xl", md: "5xl" }} fontWeight="semibold" letterSpacing="tight">
        {title}
      </styled.h1>
      <styled.p mt="4" color="fg.muted" textStyle="md" lineHeight="1.8" maxW="2xl">
        {description}
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
        {hasDsDemo(component.slug) && (
          <ResourceLink
            href={`${STORYBOOK_URL}/?path=/story/${framework}_ds-${component.slug}--usage`}
            icon="brand-storybook"
          >
            Storybook
          </ResourceLink>
        )}
      </styled.div>

      {component.hero && (hasDsDemo(component.slug) || component.slug in demos) && (
        <styled.div mt="10" mb="8">
          <Demo id={component.slug} framework={framework} />
        </styled.div>
      )}

      <Prose>
        <MDXContent code={component.code} components={mdxComponents} />
      </Prose>
    </DsDocLayout>
  )
}
