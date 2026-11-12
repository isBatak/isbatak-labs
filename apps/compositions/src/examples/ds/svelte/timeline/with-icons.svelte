<script lang="ts">
  import { Timeline } from "@isbatak/svelte-ui/timeline"
  import { Icon } from "@isbatak/svelte-ui/icon"
</script>

<Timeline.Root>
  <Timeline.Item>
    <Timeline.Connector>
      <Timeline.Separator />
      <Timeline.Indicator><Icon name="check" /></Timeline.Indicator>
    </Timeline.Connector>
    <Timeline.Content>
      <Timeline.Title>Product Shipped</Timeline.Title>
      <Timeline.Description>13th May 2021</Timeline.Description>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item>
    <Timeline.Connector>
      <Timeline.Separator />
      <Timeline.Indicator><Icon name="check" /></Timeline.Indicator>
    </Timeline.Connector>
    <Timeline.Content>
      <Timeline.Title>Order Confirmed</Timeline.Title>
      <Timeline.Description>18th May 2021</Timeline.Description>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item>
    <Timeline.Connector>
      <Timeline.Separator />
      <Timeline.Indicator><Icon name="check" /></Timeline.Indicator>
    </Timeline.Connector>
    <Timeline.Content>
      <Timeline.Title>Order Delivered</Timeline.Title>
      <Timeline.Description>20th May 2021, 10:30am</Timeline.Description>
    </Timeline.Content>
  </Timeline.Item>
</Timeline.Root>
