import { styled } from "styled-system/jsx";

export function ConcentricGapDemo() {
  return (
    <styled.div
      display="grid"
      gridTemplateColumns={{ base: "1fr", sm: "repeat(2, minmax(0, 1fr))" }}
      gap="10"
      w="full"
      maxW="lg"
    >
      <styled.figure
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="3"
      >
        <styled.div
          w="full"
          rounded="3xl"
          borderWidth="1px"
          bg="bg.subtle"
          style={{ padding: 12 }}
        >
          <styled.div
            rounded="concentric"
            h="20"
            bg="colorPalette.emphasized"
          />
        </styled.div>
        <styled.figcaption textStyle="xs" fontFamily="mono" color="fg.muted">
          measured → 24px
        </styled.figcaption>
      </styled.figure>
      <styled.figure
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="3"
      >
        <styled.div
          w="full"
          rounded="3xl"
          borderWidth="1px"
          bg="bg.subtle"
          style={{ padding: 12 }}
        >
          <styled.div
            rounded="concentric"
            concentricGap="3"
            h="20"
            bg="colorPalette.emphasized"
          />
        </styled.div>
        <styled.figcaption textStyle="xs" fontFamily="mono" color="fg.muted">
          concentricGap="3" → 12px
        </styled.figcaption>
      </styled.figure>
    </styled.div>
  );
}
