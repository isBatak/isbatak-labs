import type { Style } from "#site/content"

import { DsArticle } from "./ds-article"

export function StylePage({ style }: { style: Style }) {
  return (
    <DsArticle
      section="styles"
      crumb={{ label: "Styles", href: "/ds/styles" }}
      title={style.title}
      description={style.description}
      source={style.links.source}
      toc={style.toc}
      code={style.code}
    />
  )
}
