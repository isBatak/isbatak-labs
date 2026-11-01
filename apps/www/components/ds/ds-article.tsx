import Link from "next/link"
import { styled } from "styled-system/jsx"

import { ResourceLink } from "../docs/resource-link"
import { REPO_URL } from "../layout/site-links"
import { MDXContent, type MDXComponents } from "../mdx-content"
import { CodeFile, CodeFiles } from "../tools/code-files"
import { Faq, FaqItem } from "../tools/faq"
import { PackageInstall } from "../tools/package-install"
import { Icon } from "../ui/icon"
import { Prose } from "../ui/prose"
import { DsDocLayout } from "./ds-doc-layout"
import { DsExample } from "./ds-example"
import type { DsSection } from "./ds-nav-data"
import type { TocEntry } from "./ds-toc"
import { Formula, Term } from "./formula"

const BreadcrumbLink = styled(Link, {
  base: {
    color: "fg.muted",
    _hover: { color: "fg" },
  },
})

const mdxComponents: MDXComponents = {
  CodeFile,
  CodeFiles,
  Example: DsExample,
  Faq,
  FaqItem,
  Formula,
  PackageInstall,
  Term,
}

interface DsArticleProps {
  section: DsSection
  crumb: { label: string; href: string }
  title: string
  description: string
  source: string
  toc: TocEntry[]
  code: string
  components?: MDXComponents
}

export function DsArticle({ section, crumb, title, description, source, toc, code, components }: DsArticleProps) {
  return (
    <DsDocLayout section={section} toc={toc}>
      <styled.nav aria-label="Breadcrumb" display="flex" alignItems="center" gap="2" textStyle="sm">
        <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
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

      <styled.div display="flex" flexWrap="wrap" columnGap="6" rowGap="3" mt="6">
        <ResourceLink href={`${REPO_URL}/tree/main/${source}`} icon="brand-github">
          Source
        </ResourceLink>
      </styled.div>

      <Prose>
        <MDXContent code={code} components={{ ...mdxComponents, ...components }} />
      </Prose>
    </DsDocLayout>
  )
}
