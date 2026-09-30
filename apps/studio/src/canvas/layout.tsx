import type { ReactNode } from "react"
import { styled } from "styled-system/jsx"

export const Row = styled("div", {
  base: { display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4" },
})

export const Stack = styled("div", {
  base: { display: "flex", flexDirection: "column", gap: "4" },
})

export function Section(props: { title: string; children: ReactNode; description?: string }) {
  return (
    <styled.section display="flex" flexDirection="column" gap="3" data-studio-section>
      <styled.header display="flex" flexDirection="column" gap="0.5" px="1">
        <styled.h2 textStyle="sm" fontWeight="medium" color="fg.muted">
          {props.title}
        </styled.h2>
        {props.description && (
          <styled.p textStyle="xs" color="fg.subtle">
            {props.description}
          </styled.p>
        )}
      </styled.header>
      <styled.div
        bg="bg"
        borderWidth="1px"
        borderColor="border.muted"
        borderRadius="xl"
        px="10"
        py="12"
        display="flex"
        justifyContent="center"
      >
        <styled.div w="full" maxW="xl">
          {props.children}
        </styled.div>
      </styled.div>
    </styled.section>
  )
}

/**
 * Renders overlay content (menus, popovers, drawers) in the document flow instead of floating it, so it can be
 * inspected and edited next to the other demos.
 */
export function StaticOverlay(props: { children: ReactNode; height?: string }) {
  return (
    <styled.div className="studio-static-overlay" position="relative" minH={props.height}>
      {props.children}
    </styled.div>
  )
}
