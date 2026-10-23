import type { ReactNode } from "react"
import { styled } from "styled-system/jsx"

import { dsNavGroups } from "../../components/ds/ds-nav-data"
import { DsSubNav } from "../../components/ds/ds-sub-nav"
import { BottomBlur } from "../../components/layout/bottom-blur"
import { LayoutContainer } from "../../components/layout/layout-container"
import { SiteFooter } from "../../components/layout/site-footer"
import { SiteHeader } from "../../components/layout/site-header"

export default function DesignSystemLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader size="wide" />
      <DsSubNav components={dsNavGroups("components")} styles={dsNavGroups("styles")} />
      <styled.main px="2">
        <LayoutContainer size="wide" minH="calc(100dvh - {sizes.header} - {sizes.subnav})">
          {children}
        </LayoutContainer>
      </styled.main>
      <SiteFooter size="wide" />
      <BottomBlur />
    </>
  )
}
