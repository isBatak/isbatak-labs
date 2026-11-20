import type { Metadata } from "next"
import Link from "next/link"
import { styled } from "styled-system/jsx"

import { formatPostDate, publishedPosts } from "../../../components/blog/post-meta"
import { Eyebrow, Section } from "../../../components/home/section"

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on the details behind the components: spacing, sizing and alignment, measured and drawn.",
}

const PostLink = styled(Link, {
  base: {
    display: "grid",
    gridTemplateColumns: { base: "minmax(0, 1fr)", md: "10rem minmax(0, 1fr)" },
    columnGap: "8",
    rowGap: "2",
    py: "6",
    borderTopWidth: "1px",
    outline: "none",
    "& [data-title]": {
      transitionProperty: "color",
      transitionDuration: "fast",
    },
    _hover: { "& [data-title]": { color: "fg.muted" } },
    _focusVisible: { "& [data-title]": { textDecoration: "underline" } },
  },
})

export default function BlogPage() {
  const items = publishedPosts()

  return (
    <Section>
      <styled.div maxW="3xl" mx="auto" pb="24">
        <styled.div pt={{ base: "16", md: "28" }} pb={{ base: "10", md: "14" }}>
          <Eyebrow>Blog</Eyebrow>
          <styled.h1
            mt="4"
            textStyle={{ base: "4xl", md: "5xl" }}
            fontWeight="medium"
            lineHeight="1.05"
            letterSpacing="tighter"
            textWrap="balance"
          >
            The details, measured.
          </styled.h1>
          <styled.p mt="5" maxW="lg" color="fg.muted" lineHeight="1.7" textWrap="pretty">
            Notes on the spacing, sizing and alignment decisions behind the design system, drawn as specs.
          </styled.p>
        </styled.div>

        <styled.ol borderBottomWidth="1px">
          {items.map((post) => (
            <li key={post.slug}>
              <PostLink href={post.permalink}>
                <styled.p fontFamily="mono" textStyle="xs" color="fg.subtle" pt="1">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                </styled.p>
                <styled.div>
                  <styled.h2 data-title="" textStyle="xl" fontWeight="medium" letterSpacing="tight" textWrap="balance">
                    {post.title}
                  </styled.h2>
                  <styled.p mt="1.5" color="fg.muted" textWrap="pretty">
                    {post.description}
                  </styled.p>
                  <styled.p mt="3" fontFamily="mono" textStyle="xs" color="fg.subtle">
                    {post.metadata.readingTime} min read
                  </styled.p>
                </styled.div>
              </PostLink>
            </li>
          ))}
        </styled.ol>
      </styled.div>
    </Section>
  )
}
