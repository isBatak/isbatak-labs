<script setup lang="ts">
import { Button, ButtonGroup } from "@isbatak/vue-ui/button"
import { Steps } from "@isbatak/vue-ui/steps"
import { ref } from "vue"

const step = ref(1)
</script>

<template>
  <Steps.Root :count="3" v-model:step="step">
    <Steps.List>
      <Steps.Item :index="0">
        <Steps.Indicator />
        <Steps.Title>Contact</Steps.Title>
        <Steps.Separator />
      </Steps.Item>
      <Steps.Item :index="1">
        <Steps.Indicator />
        <Steps.Title>Shipping</Steps.Title>
        <Steps.Separator />
      </Steps.Item>
      <Steps.Item :index="2">
        <Steps.Indicator />
        <Steps.Title>Payment</Steps.Title>
        <Steps.Separator />
      </Steps.Item>
    </Steps.List>
    <Steps.Content :index="0">Tell us how to reach you.</Steps.Content>
    <Steps.Content :index="1">Choose where the order goes.</Steps.Content>
    <Steps.Content :index="2">Pick how you'd like to pay.</Steps.Content>
    <Steps.CompletedContent>All steps are complete.</Steps.CompletedContent>
    <ButtonGroup size="sm" variant="outline">
      <Steps.PrevTrigger :asChild="true">
        <Button>Prev</Button>
      </Steps.PrevTrigger>
      <Steps.NextTrigger :asChild="true">
        <Button>Next</Button>
      </Steps.NextTrigger>
    </ButtonGroup>
  </Steps.Root>
</template>
