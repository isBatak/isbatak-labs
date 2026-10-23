import type { ReactNode } from "react"
import { styled } from "styled-system/jsx"

import { LayoutContainer } from "../layout/layout-container"
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
    <LayoutContainer
      size="wide"
      display="grid"
      gridTemplateColumns={{
        base: "minmax(0, 1fr)",
        lg: "15rem minmax(0, 1fr)",
        xl: "15rem minmax(0, 1fr) 14rem",
      }}
      columnGap={{ lg: "10", xl: "16" }}
    >
      <DsSidebar section={section} />
      <styled.div minW="0" w="full" pt={{ base: "10", md: "14" }} pb="24">
        {children}
      </styled.div>
      <DsToc toc={toc} />
    </LayoutContainer>
  )
}
