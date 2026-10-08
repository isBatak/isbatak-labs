import { type Component, components, type Prototype, prototypes } from "#site/content"

export interface CatalogItem {
  slug: string
  permalink: string
  title: string
  description?: string | undefined
  category: Component["category"]
  prototype: boolean
  preview?: string | undefined
}

const byTitle = (a: CatalogItem, b: CatalogItem) => a.title.localeCompare(b.title)

export const prototypeItems = (): CatalogItem[] =>
  prototypes
    .toSorted((a, b) => a.order - b.order)
    .map(({ slug, permalink, title, description, category, preview }: Prototype) => ({
      slug,
      permalink,
      title,
      description,
      category,
      prototype: true,
      preview,
    }))

export const componentItems = (): CatalogItem[] =>
  components
    .map(({ slug, permalink, title, description, category }: Component) => ({
      slug,
      permalink,
      title,
      description,
      category,
      prototype: false,
    }))
    .toSorted(byTitle)
