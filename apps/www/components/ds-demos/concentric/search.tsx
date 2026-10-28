import { Button } from "@isbatak/react-ui/button"
import { styled } from "styled-system/jsx"

export function ConcentricSearchDemo() {
  return (
    <styled.form
      display="flex"
      alignItems="center"
      gap="2"
      w="full"
      maxW="sm"
      rounded="20px"
      p="1.5"
      borderWidth="1px"
      bg="bg.panel"
    >
      <styled.input flex="1" minW="0" ps="3" h="9" bg="transparent" outline="none" placeholder="Search docs" />
      <Button rounded="concentric" colorPalette="gray">
        Search
      </Button>
    </styled.form>
  )
}
