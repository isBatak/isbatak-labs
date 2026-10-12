<script lang="ts">
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
    type TimeInputControls,
    type TimeParts,
  } from "@isbatak/storybook-shared"
  import * as dateInput from "@zag-js/date-input"
  import * as popover from "@zag-js/popover"
  import { normalizeProps, useMachine } from "@zag-js/svelte"
  import Picker from "./picker.svelte"

  const props: TimeInputControls = $props()
  const id = $props.id()
  let value = $state.raw<dateInput.DateValue[]>([])
  const hourCycle = $derived(getHourCycle(props.locale))
  const formatter = $derived(getTimeFormatter(props.locale))
  const hourItems = $derived(getHourItems(props.locale, hourCycle))
  const minuteItems = $derived(getMinuteItems(props.locale))
  const dayPeriodItems = $derived(getDayPeriodItems(props.locale))

  const dateInputService = useMachine(dateInput.machine, () => ({
    id: `${id}:input`,
    locale: props.locale,
    granularity: "minute" as const,
    formatter,
    shouldForceLeadingZeros: true,
    name: "time",
    value,
    onValueChange(details: dateInput.ValueChangeDetails) {
      value = details.value
    },
  }))
  const dateInputApi = $derived(dateInput.connect(dateInputService, normalizeProps))
  const time = $derived(getTimeParts(dateInputApi.value[0] ?? dateInputApi.placeholderValue, hourCycle))

  function updateTime<Part extends keyof TimeParts>(part: Part, partValue: TimeParts[Part]) {
    const nextTime = setTimePart(value[0] ?? dateInputApi.placeholderValue, hourCycle, part, partValue)
    if (nextTime) value = [nextTime]
  }

  const popoverService = useMachine(popover.machine, {
    id: `${id}:popover`,
    positioning: { placement: "bottom" },
    modal: true,
  })
  const popoverApi = $derived(popover.connect(popoverService, normalizeProps))
</script>

<main class="date-input wheel-picker wheel-picker-time-input">
  <div {...dateInputApi.getRootProps()}>
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label {...dateInputApi.getLabelProps()}>Time</label>
    <div class="wheel-picker-time-field" {...popoverApi.getAnchorProps()}>
      <div {...dateInputApi.getControlProps()}>
        <div {...dateInputApi.getSegmentGroupProps()}>
          {#each dateInputApi.getSegments() as segment, index (index)}
            <span {...dateInputApi.getSegmentProps({ segment })}>{segment.text}</span>
          {/each}
        </div>
      </div>
      <button aria-label="Open time picker" {...popoverApi.getTriggerProps()}>🕘</button>
    </div>
    <input {...dateInputApi.getHiddenInputProps()} />
  </div>

  <div {...popoverApi.getPositionerProps()}>
    <div class="wheel-picker-time-content" {...popoverApi.getContentProps()}>
      <div class="sr-only" {...popoverApi.getTitleProps()}>Select time</div>
      <div class="sr-only" {...popoverApi.getDescriptionProps()}>Choose an hour, minute, and day period.</div>
      <div class="wheel-picker-group" role="group" aria-label="Time picker">
        <Picker
          label="Hour"
          items={hourItems}
          value={time.hour}
          loop
          onValueChange={(details) => updateTime("hour", details.value)}
        />
        <Picker
          label="Minute"
          items={minuteItems}
          value={time.minute}
          loop
          onValueChange={(details) => updateTime("minute", details.value)}
        />
        {#if isTwelveHourCycle(hourCycle)}
          <Picker
            label="Day period"
            items={dayPeriodItems}
            value={time.dayPeriod}
            onValueChange={(details) => isDayPeriod(details.value) && updateTime("dayPeriod", details.value)}
          />
        {/if}
      </div>
    </div>
  </div>
  <output data-testid="value">Selected time: {dateInputApi.valueAsString[0] ?? "-"}</output>
</main>
