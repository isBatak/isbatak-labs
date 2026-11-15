import { styled } from "styled-system/jsx"

import { type DsSection, dsNavNodes } from "./ds-nav-data"
import { DsNavTree } from "./ds-nav-tree"
import { sectionLabels } from "./ds-sections"

const Nav = styled("nav", {
  base: {
    display: { base: "none", lg: "flex" },
    flexDirection: "column",
    position: "sticky",
    top: "calc({sizes.header} + {sizes.subnav})",
    alignSelf: "start",
    h: "calc(100dvh - {sizes.header} - {sizes.subnav})",
    pt: "6",
    px: "4",
    borderInlineEndWidth: "1px",
  },
})

export function DsSidebar({ section }: { section: DsSection }) {
  return (
    <Nav aria-label={sectionLabels[section]}>
      <DsNavTree nodes={dsNavNodes(section)} label={sectionLabels[section]} />
    </Nav>
  )
}
