import { Button } from "@isbatak/react-ui/button"
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
      </styled.div>
      <styled.ul display="grid" gap="1.5" px="4" pt="4" pb="5" textStyle="sm" color="fg.muted">
        <li>Unlimited projects</li>
        <li>Preview deployments</li>
        <li>Priority support</li>
      </styled.ul>
      <styled.div display="grid" gridTemplateColumns="1fr 1fr" gap="2">
        <Button variant="outline" colorPalette="gray" bg="bg.panel" boxShadow="xs" roundedEndStart="concentric">
          Learn more
        </Button>
        <Button colorPalette="gray" roundedEndEnd="concentric">
          Start free trial
        </Button>
      </styled.div>
    </styled.div>
  )
}
