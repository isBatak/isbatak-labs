import type { Metadata } from "next"
import { Suspense } from "react"

import { getPost, publishedPosts } from "../../../../components/blog/post-meta"
import { PostPageSkeleton } from "../../../../components/blog/post-page"
import { SITE_URL } from "../../../../components/docs/site-url"
import { PostDetails } from "./post-details"

interface PostRouteProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return publishedPosts().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PostRouteProps): Promise<Metadata> {
  const post = getPost((await params).slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE_URL}${post.permalink}` },
    openGraph: { type: "article", publishedTime: post.date },
  }
}

export default function PostRoute({ params }: PostRouteProps) {
  return (
    <Suspense fallback={<PostPageSkeleton />}>
      <PostDetails params={params} />
    </Suspense>
  )
}
