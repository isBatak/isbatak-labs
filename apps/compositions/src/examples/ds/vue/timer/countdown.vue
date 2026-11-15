<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { Timer } from "@isbatak/vue-ui/timer"
</script>

<template>
  <Timer.Root countdown :startMs="5 * 60 * 1000">
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
  </Timer.Root>
</template>
