import { styled } from "styled-system/jsx";

export function ConcentricBleedDemo() {
  return (
    <styled.div w="72" rounded="3xl" p="4" bg="bg.muted">
      <styled.div
        mx="-4"
        mt="-4"
        roundedTop="concentric"
        aspectRatio="16/9"
        bg="colorPalette.muted"
      />
      <styled.p mt="4" textStyle="sm" color="fg.muted">
        The negative margin cancels the padding, so the media keeps the card's
        full 24px.
      </styled.p>
    </styled.div>
  );
}
