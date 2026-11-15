<script setup lang="ts">
import { ref } from "vue"
import { Icon } from "@isbatak/vue-ui/icon"
import { Text } from "@isbatak/vue-ui/text"
import { Timer } from "@isbatak/vue-ui/timer"

const isWorking = ref(true)
const cycles = ref(0)

const handleComplete = () => {
  isWorking.value = !isWorking.value
  if (isWorking.value) cycles.value++
}
</script>

<template>
  <Timer.Root countdown :startMs="isWorking ? 25 * 60 * 1000 : 5 * 60 * 1000" @complete="handleComplete">
    <Text textStyle="lg" fontWeight="semibold">
      {{ isWorking ? "Work session" : "Break session" }}
    </Text>
    <Timer.Area>
      <Timer.ItemGroup>
        <Timer.Item type="minutes" />
        <Timer.ItemLabel>minutes</Timer.ItemLabel>
      </Timer.ItemGroup>
      <Timer.Separator>:</Timer.Separator>
      <Timer.ItemGroup>
        <Timer.Item type="seconds" />
        <Timer.ItemLabel>seconds</Timer.ItemLabel>
      </Timer.ItemGroup>
    </Timer.Area>
    <Timer.Control>
      <Timer.ActionTrigger action="start">
        <Icon name="play" />
        Start
      </Timer.ActionTrigger>
      <Timer.ActionTrigger action="pause">
        <Icon name="pause" />
        Pause
      </Timer.ActionTrigger>
      <Timer.ActionTrigger action="reset">
        <Icon name="undo" />
        Reset
      </Timer.ActionTrigger>
    </Timer.Control>
    <Text textStyle="sm" color="fg.muted"> Completed cycles: {{ cycles }} </Text>
  </Timer.Root>
</template>
