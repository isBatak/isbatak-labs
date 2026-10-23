import { styled } from "styled-system/jsx"

import { type DsSection, dsNavGroups } from "./ds-nav-data"
import { DsNavGroups } from "./ds-nav-groups"

const Nav = styled("nav", {
  base: {
    display: { base: "none", lg: "block" },
    position: "sticky",
    top: "calc({sizes.header} + {sizes.subnav})",
    alignSelf: "start",
    maxH: "calc(100dvh - {sizes.header} - {sizes.subnav})",
    overflowY: "auto",
    py: { base: "10", md: "16" },
    pe: "2",
  },
})

export function DsSidebar({ section }: { section: DsSection }) {
  return (
    <Nav aria-label={section === "styles" ? "Styles" : "Components"}>
      <DsNavGroups groups={dsNavGroups(section)} />
    </Nav>
  )
}
