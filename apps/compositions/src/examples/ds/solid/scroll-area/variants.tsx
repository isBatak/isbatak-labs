import { ScrollArea } from "@isbatak/solid-ui/scroll-area"
import { Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"

export function ScrollAreaVariantsDemo() {
  return (
    <Stack gap="8" maxW="lg">
      <Stack gap="2">
        <Text fontWeight="medium">variant="hover"</Text>
        <ScrollArea.Root h="32" variant="hover">
          <ScrollArea.Viewport>
            <ScrollArea.Content pe="3" spaceY="4" textStyle="sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque
                sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
              </p>
              <p>
                Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia
                integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
              </p>
            </ScrollArea.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar />
        </ScrollArea.Root>
      </Stack>
      <Stack gap="2">
        <Text fontWeight="medium">variant="always"</Text>
        <ScrollArea.Root h="32" variant="always">
          <ScrollArea.Viewport>
            <ScrollArea.Content pe="3" spaceY="4" textStyle="sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque
                sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
              </p>
              <p>
                Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia
                integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
              </p>
            </ScrollArea.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar />
        </ScrollArea.Root>
      </Stack>
    </Stack>
  )
}
