import type { Component } from "#site/content"
import { Breadcrumb } from "@isbatak/react-ui/breadcrumb"
import Link from "next/link"
import { styled } from "styled-system/jsx"

import { ResourceLink } from "../docs/resource-link"
import { demos } from "../ds-demos"
import { REPO_URL, STORYBOOK_URL } from "../layout/site-links"
import { MDXContent, type MDXComponents } from "../mdx-content"
import { Prose } from "../ui/prose"
import { DsApi, RecipeVariants } from "./ds-api"
import type { DemoCalloutsConfig } from "./demo-callouts"
import { DsDemo, hasDsDemo } from "./ds-demo"
import { DsDocLayout } from "./ds-doc-layout"
import { DsExample } from "./ds-example"
import type { DsFrameworkId } from "./ds-framework"
import { DsFrameworkPicker } from "./ds-framework-picker"

const repoUrl = (path: string) => `${REPO_URL}/tree/main/${path}`

interface ComponentPageProps {
  component: Component
  framework: DsFrameworkId
}

interface DemoProps {
  id: string
  framework: DsFrameworkId
  callouts?: DemoCalloutsConfig
}

function Demo({ id, framework, callouts }: DemoProps) {
  return id in demos ? (
    <DsExample id={id} callouts={callouts} />
  ) : (
    <DsDemo id={id} framework={framework} callouts={callouts} />
  )
}

export function ComponentPage({ component, framework }: ComponentPageProps) {
  const { title, description, links } = component
  const mdxComponents: MDXComponents = {
    Example: ({ id, callouts }: Omit<DemoProps, "framework">) => (
      <Demo id={id} framework={framework} callouts={callouts} />
    ),
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

      <styled.div display="flex" flexWrap="wrap" gap="2" mt="6">
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
