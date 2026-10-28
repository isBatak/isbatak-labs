import { styled } from "styled-system/jsx"

export function ConcentricWrapperDemo() {
  return (
    <styled.div
      display="grid"
      gridTemplateColumns={{ base: "1fr", sm: "repeat(2, minmax(0, 1fr))" }}
      gap="10"
      w="full"
      maxW="lg"
    >
      <styled.figure display="flex" flexDirection="column" alignItems="center" gap="3">
        <styled.div w="full" rounded="3xl" borderWidth="1px" bg="bg.subtle">
          <styled.div p="2">
            <styled.div p="1" display="grid" gridTemplateColumns="1fr 1fr" gap="1">
              <styled.div rounded="concentric" h="14" bg="colorPalette.emphasized" />
              <styled.div rounded="concentric" h="14" bg="colorPalette.emphasized" />
            </styled.div>
          </styled.div>
        </styled.div>
        <styled.figcaption textStyle="xs" fontFamily="mono" color="fg.muted">
          plain wrapper → 19px
        </styled.figcaption>
      </styled.figure>
      <styled.figure display="flex" flexDirection="column" alignItems="center" gap="3">
        <styled.div w="full" rounded="3xl" borderWidth="1px" bg="bg.subtle">
          <styled.div rounded="concentric" p="2">
            <styled.div p="1" display="grid" gridTemplateColumns="1fr 1fr" gap="1">
              <styled.div rounded="concentric" h="14" bg="colorPalette.emphasized" />
              <styled.div rounded="concentric" h="14" bg="colorPalette.emphasized" />
            </styled.div>
          </styled.div>
        </styled.div>
        <styled.figcaption textStyle="xs" fontFamily="mono" color="fg.muted">
          wrapper in the chain → 11px
        </styled.figcaption>
      </styled.figure>
    </styled.div>
  )
}
