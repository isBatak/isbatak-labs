import { styled } from "styled-system/jsx"

export function ImageOutlineCompareDemo() {
  return (
    <styled.div
      display="grid"
      gridTemplateColumns={{ base: "1fr", sm: "repeat(2, minmax(0, 1fr))" }}
      gap="8"
      w="full"
      maxW="xl"
    >
      <styled.figure display="flex" flexDirection="column" alignItems="center" gap="3">
        <styled.img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Storm_at_Sea_on_a_Moonlit_Night_%28Aivazovsky%29.jpg/960px-Storm_at_Sea_on_a_Moonlit_Night_%28Aivazovsky%29.jpg"
          alt="Storm at Sea on a Moonlit Night by Ivan Aivazovsky"
          w="full"
          rounded="l3"
        />
        <styled.figcaption textStyle="xs" fontFamily="mono" color="fg.muted">
          No outline
        </styled.figcaption>
      </styled.figure>
      <styled.figure display="flex" flexDirection="column" alignItems="center" gap="3">
        <styled.img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Storm_at_Sea_on_a_Moonlit_Night_%28Aivazovsky%29.jpg/960px-Storm_at_Sea_on_a_Moonlit_Night_%28Aivazovsky%29.jpg"
          alt="Storm at Sea on a Moonlit Night by Ivan Aivazovsky"
          w="full"
          rounded="l3"
          layerStyle="imageOutline"
        />
        <styled.figcaption textStyle="xs" fontFamily="mono" color="fg.muted">
          layerStyle=&quot;imageOutline&quot;
        </styled.figcaption>
      </styled.figure>
      <styled.p gridColumn="1 / -1" textAlign="center" textStyle="xs" color="fg.subtle">
        Ivan Aivazovsky, <em>Storm at Sea on a Moonlit Night</em>
      </styled.p>
    </styled.div>
  )
}
