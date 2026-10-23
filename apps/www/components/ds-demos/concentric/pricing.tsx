import { styled } from "styled-system/jsx"

export function ConcentricPricingDemo() {
  return (
    <styled.div w="72" rounded="36px" p="2" borderWidth="1px" bg="bg.muted">
      <styled.div rounded="concentric" p="4" bg="bg.panel" boxShadow="xs">
        <styled.p textStyle="sm" fontWeight="medium" color="fg.muted">
          Pro
        </styled.p>
        <styled.p mt="2" textStyle="3xl" fontWeight="semibold">
          $24
          <styled.span textStyle="sm" fontWeight="normal" color="fg.muted">
            {" "}
            / month
          </styled.span>
        </styled.p>
        <styled.p mt="1" textStyle="sm" color="fg.muted">
          For teams shipping every day.
        </styled.p>
        <styled.button
          type="button"
          mt="5"
          w="full"
          h="10"
          rounded="concentric"
          bg="colorPalette.solid"
          color="colorPalette.contrast"
          textStyle="sm"
          fontWeight="medium"
        >
          Start free trial
        </styled.button>
      </styled.div>
      <styled.ul display="grid" gap="1.5" px="4" pt="4" pb="3" textStyle="sm" color="fg.muted">
        <li>Unlimited projects</li>
        <li>Preview deployments</li>
        <li>Priority support</li>
      </styled.ul>
    </styled.div>
  )
}
