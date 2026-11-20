import { notFound } from "next/navigation"

import { getPost } from "../../../../components/blog/post-meta"
import { PostPage } from "../../../../components/blog/post-page"

export async function PostDetails({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug)
  if (!post) notFound()
  return <PostPage post={post} />
}
