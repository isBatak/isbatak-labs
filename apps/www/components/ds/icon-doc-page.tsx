import type { IconDoc } from "#site/content"

import { BoringIconsAuthor } from "./boring-icons-author"
import { DsArticle } from "./ds-article"
import { IconGallery } from "./icon-gallery"

export function IconDocPage({ doc }: { doc: IconDoc }) {
  return (
    <DsArticle
      section="icons"
      crumb={{ label: "Icons", href: "/ds/icons" }}
      title={doc.title}
      description={doc.description}
      source="packages/ui/icons"
      toc={doc.toc}
      code={doc.code}
      components={{ BoringIconsAuthor, IconGallery }}
    />
  )
}
