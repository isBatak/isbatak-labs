import { styled } from "styled-system/jsx";

export function ConcentricFloorDemo() {
  return (
    <styled.div display="flex" flexWrap="wrap" justifyContent="center" gap="8">
      <styled.figure
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="3"
      >
        <styled.div w="40" rounded="lg" p="4" borderWidth="1px" bg="bg.subtle">
          <styled.div
            rounded="concentric"
            h="16"
            bg="colorPalette.emphasized"
          />
        </styled.div>
        <styled.figcaption textStyle="xs" fontFamily="mono" color="fg.muted">
          8 − 16 → 0px
        </styled.figcaption>
      </styled.figure>
      <styled.figure
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="3"
      >
        <styled.div
          w="40"
          concentricFloor="sm"
          rounded="lg"
          p="4"
          borderWidth="1px"
          bg="bg.subtle"
        >
          <styled.div
            rounded="concentric"
            h="16"
            bg="colorPalette.emphasized"
          />
        </styled.div>
        <styled.figcaption textStyle="xs" fontFamily="mono" color="fg.muted">
          floor → 4px
        </styled.figcaption>
      </styled.figure>
    </styled.div>
  );
}
