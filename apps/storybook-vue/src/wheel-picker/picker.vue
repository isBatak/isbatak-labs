<script setup lang="ts">
import { wheelPicker as wheelPickerRecipe } from "@isbatak/storybook-shared/recipes"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { normalizeProps } from "@zag-js/vue"
import { computed, onBeforeUnmount, onMounted, ref, useId, watch } from "vue"

const styles = wheelPickerRecipe()

const props = defineProps<{
  label: string
  items: wheelPicker.Props["items"]
  modelValue?: string
  defaultValue?: string
  name?: string
  disabled?: boolean
  loop?: boolean
  visibleCount?: number
  itemHeight?: number
}>()

const emit = defineEmits<{
  valueChange: [details: wheelPicker.ValueChangeDetails]
  "update:modelValue": [value: string]
}>()

const id = useId()
const picker = wheelPicker.createWheelPicker()
const internalValue = ref(props.defaultValue ?? props.items[0]?.value ?? "")

const pickerProps = computed<wheelPicker.Props>(() => ({
  id,
  items: props.items,
  name: props.name,
  disabled: props.disabled,
  loop: props.loop,
  visibleCount: props.visibleCount,
  itemHeight: props.itemHeight,
  value: props.modelValue ?? internalValue.value,
  onValueChange(details) {
    if (props.modelValue === undefined) internalValue.value = details.value
    emit("valueChange", details)
    emit("update:modelValue", details.value)
  },
}))

let stop: (() => void) | undefined

onMounted(() => {
  stop = picker.mount(() => pickerProps.value)
  picker.sync(pickerProps.value)
})

onBeforeUnmount(() => stop?.())

watch(
  () => [pickerProps.value.value, props.items.length, props.loop, props.itemHeight],
  () => picker.sync(pickerProps.value),
  { flush: "post" },
)

const api = computed(() => picker.connect(pickerProps.value, normalizeProps))
</script>

<template>
  <div v-bind="api.getRootProps()" :class="styles.root">
    <span v-bind="api.getLabelProps()" :class="styles.label">{{ label }}</span>
    <div v-bind="api.getControlProps()" :class="styles.control">
      <div v-bind="api.getViewportProps()" :class="styles.viewport">
        <div v-bind="api.getItemGroupProps()" :class="styles.itemGroup">
          <div v-for="{ row, item } in api.rows" :key="row" v-bind="api.getItemProps({ row })" :class="styles.item">
            {{ item.label }}
          </div>
        </div>
      </div>
      <div v-bind="api.getHighlightProps()" :class="styles.highlight" />
    </div>
    <input v-bind="api.getHiddenInputProps()" />
  </div>
</template>
