import { Timeline } from "@isbatak/react-ui/timeline"
import { Stack } from "@isbatak/react-ui/stack"

export function TimelineVariantsDemo() {
  return (
    <Stack gap="10">
      <Timeline.Root variant="solid">
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Product Shipped</Timeline.Title>
            <Timeline.Description>13th May 2021</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Order Confirmed</Timeline.Title>
            <Timeline.Description>18th May 2021</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Order Delivered</Timeline.Title>
            <Timeline.Description>20th May 2021, 10:30am</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
      <Timeline.Root variant="subtle">
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Product Shipped</Timeline.Title>
            <Timeline.Description>13th May 2021</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Order Confirmed</Timeline.Title>
            <Timeline.Description>18th May 2021</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Order Delivered</Timeline.Title>
            <Timeline.Description>20th May 2021, 10:30am</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
      <Timeline.Root variant="outline">
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Product Shipped</Timeline.Title>
            <Timeline.Description>13th May 2021</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Order Confirmed</Timeline.Title>
            <Timeline.Description>18th May 2021</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Order Delivered</Timeline.Title>
            <Timeline.Description>20th May 2021, 10:30am</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
      <Timeline.Root variant="plain">
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Product Shipped</Timeline.Title>
            <Timeline.Description>13th May 2021</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Order Confirmed</Timeline.Title>
            <Timeline.Description>18th May 2021</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Order Delivered</Timeline.Title>
            <Timeline.Description>20th May 2021, 10:30am</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
    </Stack>
  )
}
