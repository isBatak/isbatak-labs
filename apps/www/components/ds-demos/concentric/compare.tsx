import { styled } from "styled-system/jsx"

export function ConcentricCompareDemo() {
  return (
    <styled.div
      display="grid"
      gridTemplateColumns={{ base: "1fr", sm: "repeat(2, minmax(0, 1fr))" }}
      gap="10"
      w="full"
      maxW="xl"
    >
      <styled.figure display="flex" flexDirection="column" alignItems="center" gap="4">
        <styled.div w="full" rounded="36px" p="3" borderWidth="1px" bg="bg.subtle">
          <styled.div rounded="36px" p="3" borderWidth="1px" bg="bg.muted">
            <styled.div rounded="36px" h="20" borderWidth="1px" bg="bg.emphasized" />
          </styled.div>
        </styled.div>
        <styled.figcaption textStyle="xs" fontFamily="mono" color="fg.muted">
          36px · 36px · 36px
        </styled.figcaption>
      </styled.figure>
      <styled.figure display="flex" flexDirection="column" alignItems="center" gap="4">
        <styled.div w="full" rounded="36px" p="3" borderWidth="1px" bg="bg.subtle">
          <styled.div rounded="concentric" p="3" borderWidth="1px" bg="bg.muted">
            <styled.div rounded="concentric" h="20" borderWidth="1px" bg="bg.emphasized" />
          </styled.div>
        </styled.div>
        <styled.figcaption textStyle="xs" fontFamily="mono" color="fg.muted">
          36px · 23px · 10px
        </styled.figcaption>
      </styled.figure>
    </styled.div>
  )
}
