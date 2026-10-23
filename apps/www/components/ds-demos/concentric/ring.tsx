import { styled } from "styled-system/jsx"

export function ConcentricRingDemo() {
  return (
    <styled.div position="relative" w="64" rounded="2xl" borderWidth="1px" p="4" bg="bg.panel">
      <styled.span
        position="absolute"
        inset="1"
        rounded="concentric"
        borderWidth="2px"
        borderStyle="dashed"
        borderColor="colorPalette.solid"
        pointerEvents="none"
      />
      <styled.p textStyle="sm" fontWeight="medium">
        Selected plan
      </styled.p>
      <styled.p mt="1" textStyle="sm" color="fg.muted">
        The ring is inset 4px inside a 1px border: 16 − 1 − 4 = 11px.
      </styled.p>
    </styled.div>
  )
}
