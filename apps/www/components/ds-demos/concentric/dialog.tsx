import { Button } from "@isbatak/react-ui/button";
import { styled } from "styled-system/jsx";

export function ConcentricDialogDemo() {
  return (
    <styled.div w="80" rounded="24px" p="2" bg="bg.panel" boxShadow="lg">
      <styled.div px="4" pt="2" pb="5">
        <styled.h3 textStyle="md" fontWeight="semibold">
          Delete this project?
        </styled.h3>
        <styled.p mt="1.5" textStyle="sm" color="fg.muted">
          Its 14 deployments and their logs go with it. This can't be undone.
        </styled.p>
      </styled.div>
      <styled.div display="grid" gridTemplateColumns="1fr 1fr" gap="2">
        <Button rounded="concentric" colorPalette="gray" variant="subtle">
          Cancel
        </Button>
        <Button colorPalette="gray" rounded="concentric">
          Delete
        </Button>
      </styled.div>
    </styled.div>
  );
}
