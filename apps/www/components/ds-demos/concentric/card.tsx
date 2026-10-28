import { styled } from "styled-system/jsx"

export function ConcentricCardDemo() {
  return (
    <styled.article w="72" rounded="28px" p="1.5" borderWidth="1px" bg="bg.panel">
      <styled.div roundedTop="concentric" aspectRatio="16/10" bg="colorPalette.muted" />
      <styled.div px="3.5" pt="4" pb="3.5">
        <styled.p textStyle="xs" color="fg.subtle">
          Field notes · 6 min read
        </styled.p>
        <styled.h3 mt="1.5" textStyle="md" fontWeight="semibold">
          A weekend above the tree line
        </styled.h3>
        <styled.p mt="1" textStyle="sm" color="fg.muted">
          Notes, routes and a packing list from three days on the ridge.
        </styled.p>
      </styled.div>
    </styled.article>
  )
}
