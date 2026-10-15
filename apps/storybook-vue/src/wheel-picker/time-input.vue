<script setup lang="ts">
import {
  getDayPeriodItems,
  getHourCycle,
  getHourItems,
  getMinuteItems,
  getTimeFormatter,
  getTimeParts,
  isDayPeriod,
  isTwelveHourCycle,
  setTimePart,
  type Locale,
  type TimeParts,
} from "@isbatak/storybook-shared"
import * as dateInput from "@zag-js/date-input"
import * as popover from "@zag-js/popover"
import { normalizeProps, useMachine } from "@zag-js/vue"
import { computed, shallowRef, useId } from "vue"
import Picker from "./picker.vue"

const props = defineProps<{ locale: Locale }>()

const id = useId()
const value = shallowRef<dateInput.DateValue[]>([])
const hourCycle = computed(() => getHourCycle(props.locale))
const formatter = computed(() => getTimeFormatter(props.locale))
const hourItems = computed(() => getHourItems(props.locale, hourCycle.value))
const minuteItems = computed(() => getMinuteItems(props.locale))
const dayPeriodItems = computed(() => getDayPeriodItems(props.locale))

const dateInputService = useMachine(
  dateInput.machine,
  computed(() => ({
    id: `${id}:input`,
    locale: props.locale,
    granularity: "minute" as const,
    formatter: formatter.value,
    shouldForceLeadingZeros: true,
    name: "time",
    value: value.value,
    onValueChange(details: dateInput.ValueChangeDetails) {
      value.value = details.value
    },
  })),
)
const dateInputApi = computed(() => dateInput.connect(dateInputService, normalizeProps))
const time = computed(() =>
  getTimeParts(dateInputApi.value.value[0] ?? dateInputApi.value.placeholderValue, hourCycle.value),
)

function updateTime<Part extends keyof TimeParts>(part: Part, partValue: TimeParts[Part]) {
  const current = value.value[0] ?? dateInputApi.value.placeholderValue
  const nextTime = setTimePart(current, hourCycle.value, part, partValue)
  if (nextTime) value.value = [nextTime]
}

const popoverService = useMachine(popover.machine, {
  id: `${id}:popover`,
  positioning: { placement: "bottom" },
  modal: true,
})
const popoverApi = computed(() => popover.connect(popoverService, normalizeProps))
</script>

<template>
  <main class="date-input wheel-picker wheel-picker-time-input">
    <div v-bind="dateInputApi.getRootProps()">
      <label v-bind="dateInputApi.getLabelProps()">Time</label>
      <div class="wheel-picker-time-field" v-bind="popoverApi.getAnchorProps()">
        <div v-bind="dateInputApi.getControlProps()">
          <div v-bind="dateInputApi.getSegmentGroupProps()">
            <span
              v-for="(segment, index) in dateInputApi.getSegments()"
              :key="index"
              v-bind="dateInputApi.getSegmentProps({ segment })"
              >{{ segment.text }}</span
            >
          </div>
        </div>
        <button aria-label="Open time picker" v-bind="popoverApi.getTriggerProps()">🕘</button>
      </div>
      <input v-bind="dateInputApi.getHiddenInputProps()" />
    </div>

    <div v-bind="popoverApi.getPositionerProps()">
      <div class="wheel-picker-time-content" v-bind="popoverApi.getContentProps()">
        <div class="sr-only" v-bind="popoverApi.getTitleProps()">Select time</div>
        <div class="sr-only" v-bind="popoverApi.getDescriptionProps()">Choose an hour, minute, and day period.</div>
        <div class="wheel-picker-group" role="group" aria-label="Time picker">
          <Picker
            label="Hour"
            loop
            :items="hourItems"
            :model-value="time.hour"
            @update:model-value="updateTime('hour', $event)"
          />
          <Picker
            label="Minute"
            loop
            :items="minuteItems"
            :model-value="time.minute"
            @update:model-value="updateTime('minute', $event)"
          />
          <Picker
            v-if="isTwelveHourCycle(hourCycle)"
            label="Day period"
            :items="dayPeriodItems"
            :model-value="time.dayPeriod"
            @update:model-value="isDayPeriod($event) && updateTime('dayPeriod', $event)"
          />
        </div>
      </div>
    </div>
    <output data-testid="value">Selected time: {{ dateInputApi.valueAsString[0] ?? "-" }}</output>
  </main>
</template>
