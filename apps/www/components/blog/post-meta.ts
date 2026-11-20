import { posts } from "#site/content"

const dateFormat = new Intl.DateTimeFormat("en", { dateStyle: "long", timeZone: "UTC" })

export const formatPostDate = (date: string) => dateFormat.format(new Date(date))

export const publishedPosts = () => posts.filter((post) => !post.draft).toSorted((a, b) => b.date.localeCompare(a.date))

export const getPost = (slug: string) => publishedPosts().find((post) => post.slug === slug)
