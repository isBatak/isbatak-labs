import type { Post } from "#site/content"
import Link from "next/link"
import { css, cx } from "styled-system/css"
import { styled } from "styled-system/jsx"
import { prose } from "styled-system/recipes"

import { Eyebrow, Section } from "../home/section"
import { MDXContent } from "../mdx-content"
import { Icon } from "../ui/icon"
import { postComponents } from "./mdx-components"
import { formatPostDate } from "./post-meta"

const postProse = css({
  "--prose-leading": "1.75",
  maxWidth: "none",
  '& :where(h2, h3):not(:where([class~="not-prose"],[class~="not-prose"] *))': {
    scrollMarginTop: "28",
    letterSpacing: "tight",
  },
  '& :where(a):not(:where([class~="not-prose"],[class~="not-prose"] *)):hover': {
    textDecorationColor: "fg",
  },
})

const BackLink = styled(Link, {
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "2",
    textStyle: "sm",
    fontWeight: "medium",
    color: "fg.muted",
    transitionProperty: "color",
    transitionDuration: "fast",
    _hover: { color: "fg" },
  },
})

const Bone = styled("div", {
  base: {
    bg: "bg.muted",
    rounded: "l2",
    animation: "pulse",
  },
})

export function PostPageSkeleton() {
  return (
    <Section aria-busy="true">
      <styled.div maxW="2xl" mx="auto" pt={{ base: "16", md: "28" }}>
        <Bone w="16" h="3" />
        <Bone w="full" h={{ base: "10", md: "14" }} mt="6" />
        <Bone w="2/3" h="5" mt="5" />
        <Bone w="40" h="3" mt="8" />
        <Bone w="full" h="64" mt="12" />
      </styled.div>
    </Section>
  )
}

export function PostPage({ post }: { post: Post }) {
  return (
    <Section>
      <styled.article maxW="2xl" mx="auto" pt={{ base: "16", md: "28" }} pb="24">
        <styled.header pb={{ base: "8", md: "10" }} borderBottomWidth="1px">
          <styled.nav aria-label="Breadcrumb">
            <Link href="/blog">
              <Eyebrow>Blog</Eyebrow>
            </Link>
          </styled.nav>
          <styled.h1
            mt="5"
            textStyle={{ base: "4xl", md: "5xl" }}
            fontWeight="medium"
            lineHeight="1.05"
            letterSpacing="tighter"
            textWrap="balance"
          >
            {post.title}
          </styled.h1>
          <styled.p mt="4" textStyle={{ base: "lg", md: "xl" }} color="fg.muted" textWrap="pretty">
            {post.description}
          </styled.p>
          <styled.p mt="6" display="flex" gap="2" fontFamily="mono" textStyle="xs" color="fg.subtle">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.metadata.readingTime} min read</span>
          </styled.p>
        </styled.header>

        <styled.div pt={{ base: "8", md: "10" }}>
          <div className={cx(prose({ size: "md" }), postProse)}>
            <MDXContent code={post.code} components={postComponents} />
          </div>
        </styled.div>

        <styled.footer mt="16" pt="6" borderTopWidth="1px">
          <BackLink href="/blog">
            <Icon name="arrow-left" />
            All posts
          </BackLink>
        </styled.footer>
      </styled.article>
    </Section>
  )
}
