<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Drawer } from "@isbatak/vue-ui/drawer"
import { css } from "styled-system/css"

const event = css({ display: "flex", gap: "4", py: "4", borderBottomWidth: "1px", _last: { borderBottomWidth: "0" } })
const time = css({ w: "12", flexShrink: "0", color: "fg.muted", fontVariantNumeric: "tabular-nums" })
const title = css({ fontWeight: "medium" })
const description = css({ color: "fg.muted" })
</script>

<template>
  <Drawer.Root placement="bottom" :snapPoints="[0.5, 1]" :defaultSnapPoint="0.5">
    <Drawer.Trigger :asChild="true">
      <Button>View itinerary</Button>
    </Drawer.Trigger>
    <Teleport to="body">
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content h="[80dvh]">
          <Drawer.Grabber>
            <Drawer.GrabberIndicator />
          </Drawer.Grabber>
          <Drawer.Header>
            <Drawer.Title>Team day itinerary</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body :css="{ overflowY: 'hidden', '[data-expanded] &': { overflowY: 'auto' } }">
            <Drawer.Description
              >Swipe up to see the full schedule, or down to collapse or dismiss it.</Drawer.Description
            >
            <ol :class="css({ mt: '2' })">
              <li :class="event">
                <span :class="time">09:00</span>
                <div>
                  <p :class="title">Coffee at the studio</p>
                  <p :class="description">Meet the team and plan the day.</p>
                </div>
              </li>
              <li :class="event">
                <span :class="time">10:00</span>
                <div>
                  <p :class="title">Design workshop</p>
                  <p :class="description">Explore ideas for the next release.</p>
                </div>
              </li>
              <li :class="event">
                <span :class="time">12:00</span>
                <div>
                  <p :class="title">Lunch together</p>
                  <p :class="description">Take a break at our favorite local spot.</p>
                </div>
              </li>
              <li :class="event">
                <span :class="time">14:00</span>
                <div>
                  <p :class="title">Prototype review</p>
                  <p :class="description">Walk through the new interactions.</p>
                </div>
              </li>
              <li :class="event">
                <span :class="time">16:00</span>
                <div>
                  <p :class="title">Team retrospective</p>
                  <p :class="description">Share what worked and what to improve.</p>
                </div>
              </li>
              <li :class="event">
                <span :class="time">17:00</span>
                <div>
                  <p :class="title">Wrap up</p>
                  <p :class="description">Capture next steps before heading home.</p>
                </div>
              </li>
            </ol>
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.ActionTrigger :asChild="true">
              <Button variant="outline">Done</Button>
            </Drawer.ActionTrigger>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Teleport>
  </Drawer.Root>
</template>
