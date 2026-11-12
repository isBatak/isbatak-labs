<script setup lang="ts">
import { Timeline } from "@isbatak/vue-ui/timeline"
</script>

<template>
  <Timeline.Root>
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
</template>
