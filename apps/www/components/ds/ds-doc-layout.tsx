import type { ReactNode } from "react"
import { styled } from "styled-system/jsx"

import { BottomBlur } from "../layout/bottom-blur"
import type { DsSection } from "./ds-nav-data"
import { DsSidebar } from "./ds-sidebar"
import { DsToc, type TocEntry } from "./ds-toc"

interface DsDocLayoutProps {
  section: DsSection
  toc: TocEntry[]
  children: ReactNode
}

export function DsDocLayout({ section, toc, children }: DsDocLayoutProps) {
  return (
    <styled.div
      display="grid"
      gridTemplateColumns={{
        base: "minmax(0, 1fr)",
        lg: "{sizes.60} minmax(0, 1fr)",
      }}
    >
      <DsSidebar section={section} />
      <styled.div
        minW="0"
        display="grid"
        gridTemplateColumns={{
          base: "minmax(0, 1fr)",
          xl: "minmax(0, 1fr) {sizes.56}",
        }}
        columnGap="16"
        px={{ base: "5", md: "10" }}
      >
        <styled.article minW="0" pt={{ base: "10", md: "14" }} pb="24">
          {children}
        </styled.article>
        <DsToc toc={toc} />
      </styled.div>
      <BottomBlur aside />
    </styled.div>
  )
}
