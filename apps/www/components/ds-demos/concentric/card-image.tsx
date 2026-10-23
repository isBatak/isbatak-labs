import { styled } from "styled-system/jsx";

export function ConcentricCardImageDemo() {
  return (
    <styled.div w="64" rounded="3xl" borderWidth="1px" p="3" bg="bg.panel">
      <styled.div
        rounded="concentric"
        aspectRatio="4/3"
        bg="colorPalette.muted"
      />
      <styled.p mt="3" px="1" textStyle="sm" fontWeight="medium">
        24px − (12px + 1px) = 11px
      </styled.p>
    </styled.div>
  );
}
