import { styled } from "styled-system/jsx"

export function ConcentricNestedDemo() {
  return (
    <styled.div w="full" maxW="sm" rounded="64px" p="5" bg="bg.subtle">
      <styled.div rounded="concentric" p="5" bg="bg.muted">
        <styled.div rounded="concentric" p="5" bg="bg.emphasized">
          <styled.div rounded="concentric" h="16" bg="colorPalette.solid" />
        </styled.div>
      </styled.div>
    </styled.div>
  )
}
