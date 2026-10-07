import { type Component, components, type Prototype, prototypes } from "#site/content"

export interface CatalogItem {
  slug: string
  permalink: string
  title: string
  description?: string | undefined
  category: Component["category"]
  prototype: boolean
  status?: Component["status"]
  preview?: string | undefined
}

const byTitle = (a: CatalogItem, b: CatalogItem) => a.title.localeCompare(b.title)

export const prototypeItems = (): CatalogItem[] =>
  prototypes
    .toSorted((a, b) => a.order - b.order)
    .map(({ slug, permalink, title, description, category, status, preview }: Prototype) => ({
      slug,
      permalink,
      title,
      description,
      category,
      prototype: true,
      status,
      preview,
    }))

export const componentItems = (): CatalogItem[] =>
  components
    .map(({ slug, permalink, title, description, category, status }: Component) => ({
      slug,
      permalink,
      title,
      description,
      category,
      prototype: false,
      status,
    }))
    .toSorted(byTitle)

export const allItems = () => [...prototypeItems(), ...componentItems()].toSorted(byTitle)
