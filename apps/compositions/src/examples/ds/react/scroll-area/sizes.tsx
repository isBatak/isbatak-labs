import { ScrollArea } from "@isbatak/react-ui/scroll-area"
import { Stack } from "@isbatak/react-ui/stack"
import { Text } from "@isbatak/react-ui/text"

export function ScrollAreaSizesDemo() {
  return (
    <Stack gap="8" maxW="lg">
      <Stack gap="2">
        <Text fontWeight="medium">size="xs"</Text>
        <ScrollArea.Root size="xs" h="32" variant="always">
          <ScrollArea.Viewport>
            <ScrollArea.Content pe="5" spaceY="4" textStyle="sm">
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
        <Text fontWeight="medium">size="sm"</Text>
        <ScrollArea.Root size="sm" h="32" variant="always">
          <ScrollArea.Viewport>
            <ScrollArea.Content pe="5" spaceY="4" textStyle="sm">
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
        <Text fontWeight="medium">size="md"</Text>
        <ScrollArea.Root size="md" h="32" variant="always">
          <ScrollArea.Viewport>
            <ScrollArea.Content pe="5" spaceY="4" textStyle="sm">
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
        <Text fontWeight="medium">size="lg"</Text>
        <ScrollArea.Root size="lg" h="32" variant="always">
          <ScrollArea.Viewport>
            <ScrollArea.Content pe="5" spaceY="4" textStyle="sm">
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
