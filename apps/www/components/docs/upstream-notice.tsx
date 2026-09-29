import type { ReactNode } from "react"
import { styled } from "styled-system/jsx"

import { Icon } from "../ui/icon"

export interface UpstreamItem {
  /** Merge request URL, e.g. `https://github.com/chakra-ui/zag/pull/3317`. */
  url: string
  /** Project name shown above the title. Defaults to `owner/repo` parsed from the URL. */
  project?: string
  /** Logo image URL. Defaults to the GitHub avatar of the repo owner. */
  logo?: string
  /** Title of the merge request. */
  title?: string
  /** Short badge on the right, e.g. `prerequisite`. */
  label?: string
}

interface UpstreamNoticeProps {
  /** Heading of the card. */
  title?: string
  /** Merge requests to list, in order. */
  items: UpstreamItem[]
  /** Info text shown under the heading. */
  children?: ReactNode
}

const Card = styled("aside", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "4",
    my: "6",
    p: "5",
    borderRadius: "l3",
    borderWidth: "1px",
    bg: "bg.subtle",
  },
})

const Row = styled("a", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "4",
    p: "3",
    borderRadius: "l2",
    color: "fg",
    transition: "background 0.15s",
    _hover: { bg: "bg.muted" },
    _focusVisible: { outline: "2px solid", outlineColor: "colorPalette.focusRing", outlineOffset: "2px" },
  },
})

function parseUrl(url: string) {
  const match = /github\.com\/([^/]+)\/([^/]+)\/(?:pull|issues)\/(\d+)/.exec(url)
  if (!match) return {}
  const [, owner, repo, number] = match
  return { owner, project: `${owner}/${repo}`, number }
}

function UpstreamRow({ url, project, logo, title, label }: UpstreamItem) {
  const parsed = parseUrl(url)
  const name = project ?? parsed.project
  const logoSrc = logo ?? (parsed.owner ? `https://github.com/${parsed.owner}.png?size=80` : undefined)

  return (
    <Row href={url} target="_blank" rel="noopener">
      <styled.span
        display="grid"
        placeItems="center"
        flexShrink="0"
        w="10"
        h="10"
        borderRadius="l2"
        borderWidth="1px"
        overflow="hidden"
        bg="bg.default"
      >
        {logoSrc ? <styled.img src={logoSrc} alt="" w="full" h="full" objectFit="cover" /> : <Icon name="brand-github" />}
      </styled.span>
      <styled.span display="flex" flexDirection="column" minW="0" flex="1">
        <styled.span fontFamily="mono" textStyle="sm" color="fg.muted">
          {name}
          {parsed.number && ` #${parsed.number}`}
        </styled.span>
        {title && <styled.span fontWeight="medium">{title}</styled.span>}
      </styled.span>
      {label && (
        <styled.span
          flexShrink="0"
          px="2"
          py="0.5"
          borderRadius="full"
          borderWidth="1px"
          textStyle="xs"
          fontFamily="mono"
          color="fg.muted"
        >
          {label}
        </styled.span>
      )}
      <Icon name="arrow-up-right" color="fg.subtle" />
    </Row>
  )
}

export function UpstreamNotice({ title = "Coming upstream", items, children }: UpstreamNoticeProps) {
  return (
    <Card className="not-prose">
      <styled.div display="flex" alignItems="center" gap="3">
        <Icon name="sparkles" color="fg" />
        <styled.p fontWeight="semibold">{title}</styled.p>
      </styled.div>
      {children && (
        <styled.div textStyle="sm" color="fg.muted">
          {children}
        </styled.div>
      )}
      <styled.div display="flex" flexDirection="column" gap="1">
        {items.map((item) => (
          <UpstreamRow key={item.url} {...item} />
        ))}
      </styled.div>
    </Card>
  )
}
