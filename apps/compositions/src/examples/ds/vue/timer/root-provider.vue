<script setup lang="ts">
import { Icon, StartIcon } from "@isbatak/vue-ui/icon"
import { Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
import { Timer, useTimer } from "@isbatak/vue-ui/timer"

const timer = useTimer({ targetMs: 60 * 60 * 1000 })
</script>

<template>
  <Stack gap="3" align="flex-start">
    <Text textStyle="sm" color="fg.muted"> Running: {{ timer.running ? "yes" : "no" }} </Text>
    <Timer.RootProvider :value="timer">
      <Timer.Area>
        <Timer.ItemGroup>
          <Timer.Item type="hours" />
          <Timer.ItemLabel>hours</Timer.ItemLabel>
        </Timer.ItemGroup>
        <Timer.Separator>:</Timer.Separator>
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
        <Timer.ActionTrigger action="resume">
          <StartIcon :asChild="true">
            <Icon name="play" />
          </StartIcon>
          Resume
        </Timer.ActionTrigger>
        <Timer.ActionTrigger action="pause">
          <StartIcon :asChild="true">
            <Icon name="pause" />
          </StartIcon>
          Pause
        </Timer.ActionTrigger>
        <Timer.ActionTrigger action="reset">
          <StartIcon :asChild="true">
            <Icon name="undo" />
          </StartIcon>
          Reset
        </Timer.ActionTrigger>
      </Timer.Control>
    </Timer.RootProvider>
  </Stack>
</template>
