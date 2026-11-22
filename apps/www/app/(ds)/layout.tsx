import type { ReactNode } from "react"
import { styled } from "styled-system/jsx"

import { dsNavNodes } from "../../components/ds/ds-nav-data"
import { DsSubNav } from "../../components/ds/ds-sub-nav"
import { SiteFooter } from "../../components/layout/site-footer"
import { SiteHeader } from "../../components/layout/site-header"

export default function DesignSystemLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader size="full" />
      <DsSubNav components={dsNavNodes("components")} styles={dsNavNodes("styles")} icons={dsNavNodes("icons")} />
      <styled.main minH="calc(100dvh - {sizes.header} - {sizes.subnav})">{children}</styled.main>
      <SiteFooter size="wide" />
    </>
  )
}
