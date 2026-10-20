import type { Ref } from "react"
import { styled } from "styled-system/jsx"

const Article = styled("div", {
  base: {
    h: "72",
    overflowY: "auto",
    pe: "4",
    pb: "48",
    textAlign: "start",
    "& h3": {
      mt: "6",
      mb: "2",
      textStyle: "md",
      fontWeight: "semibold",
      _first: {
        mt: "0",
      },
    },
    "& h4": {
      mt: "4",
      mb: "2",
      textStyle: "sm",
      fontWeight: "semibold",
    },
    "& p": {
      color: "fg.muted",
      textStyle: "sm",
      lineHeight: "1.7",
    },
  },
})

interface DemoArticleProps {
  prefix: string
  ref: Ref<HTMLDivElement>
}

export function DemoArticle({ prefix, ref }: DemoArticleProps) {
  return (
    <Article ref={ref}>
      <h3 id={`${prefix}-introduction`}>Introduction</h3>
      <p>
        The table of contents follows the headings as you scroll. The entry for the heading at the top of the article is
        active, and the indicator moves to it.
      </p>
      <h3 id={`${prefix}-installation`}>Installation</h3>
      <p>
        Add the component to your project, then pass the headings as items. Each item needs the id of its heading as its
        value and a depth for its level.
      </p>
      <h3 id={`${prefix}-usage`}>Usage</h3>
      <p>Render a link for every item. Clicking a link scrolls its heading into view and updates the URL hash.</p>
      <h4 id={`${prefix}-props`}>Props</h4>
      <p>Pass scrollEl when the headings scroll inside an element rather than the page, as they do here.</p>
      <h4 id={`${prefix}-events`}>Events</h4>
      <p>onActiveChange reports the active headings whenever they change.</p>
      <h3 id={`${prefix}-styling`}>Styling</h3>
      <p>The recipe indents nested items by their depth and colors the active link.</p>
    </Article>
  )
}
