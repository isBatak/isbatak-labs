<script setup lang="ts">
import { ref } from "vue"
import { Icon, StartIcon } from "@isbatak/vue-ui/icon"
import { Text } from "@isbatak/vue-ui/text"
import { Timer } from "@isbatak/vue-ui/timer"

const ticks = ref(0)
const completed = ref(false)
</script>

<template>
  <Timer.Root :targetMs="10 * 1000" @tick="ticks++" @complete="completed = true">
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
        <StartIcon :asChild="true">
          <Icon name="play" />
        </StartIcon>
        Start
      </Timer.ActionTrigger>
      <Timer.ActionTrigger action="reset">
        <StartIcon :asChild="true">
          <Icon name="undo" />
        </StartIcon>
        Reset
      </Timer.ActionTrigger>
    </Timer.Control>
    <Text textStyle="sm" color="fg.muted"> Ticks: {{ ticks }} · {{ completed ? "Completed" : "Not completed" }} </Text>
  </Timer.Root>
</template>
