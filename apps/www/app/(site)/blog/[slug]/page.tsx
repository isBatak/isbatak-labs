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
  const description = post.metaDescription ?? post.description
  const poster = post.poster && { url: `${SITE_URL}${post.poster}`, width: 1920, height: 1440, alt: post.title }
  return {
    title: post.title,
    description,
    alternates: { canonical: `${SITE_URL}${post.permalink}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}${post.permalink}`,
      title: post.title,
      description,
      publishedTime: post.date,
      images: poster ? [poster] : undefined,
      videos: post.video
        ? [{ url: `${SITE_URL}${post.video}`, type: "video/mp4", width: 1920, height: 1440 }]
        : undefined,
    },
    twitter: {
      card: poster ? "summary_large_image" : "summary",
      title: post.title,
      description,
      images: poster ? [poster.url] : undefined,
    },
  }
}

export default function PostRoute({ params }: PostRouteProps) {
  return (
    <Suspense fallback={<PostPageSkeleton />}>
      <PostDetails params={params} />
    </Suspense>
  )
}
