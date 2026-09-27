<script setup lang="ts">
import {
  formatOpenItem,
  formatSender,
  initialMessages,
  swipeableListArgs,
  type Message,
} from "@isbatak/storybook-shared"
import * as swipeableList from "@isbatak/zag-swipeable-list"
import { mergeProps, normalizeProps, useMachine } from "@zag-js/vue"
import { computed, ref, useId } from "vue"

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    dir?: "ltr" | "rtl"
    fullSwipe?: boolean
    threshold?: number
    fullSwipeThreshold?: number
    snapBounce?: number
    resistance?: number
    onOpenItemChange?: (details: swipeableList.OpenItemChangeDetails) => void
    onFullSwipe?: (details: swipeableList.FullSwipeDetails) => void
  }>(),
  swipeableListArgs,
)

const messages = ref<Message[]>(initialMessages)
const log = ref("")

const id = useId()
const service = useMachine(
  swipeableList.machine,
  computed(() => ({
    id,
    ...props,
  })),
)
const api = computed(() => swipeableList.connect(service, normalizeProps))

function update(id: string, patch: Partial<Message>) {
  messages.value = messages.value.map((message) => (message.id === id ? { ...message, ...patch } : message))
}

function remove(id: string) {
  messages.value = messages.value.filter((message) => message.id !== id)
  log.value = `Deleted ${id}`
}
</script>

<template>
  <main class="swipeable-list-story">
    <ul v-bind="api.getRootProps()">
      <li v-for="message in messages" :key="message.id" v-bind="api.getItemProps({ value: message.id })">
        <div v-bind="api.getItemActionsProps({ value: message.id, side: 'start' })">
          <button
            v-bind="
              mergeProps(api.getItemActionProps({ value: message.id, side: 'start' }), {
                onClick: () => update(message.id, { unread: !message.unread }),
              })
            "
            data-tone="blue"
          >
            {{ message.unread ? "Read" : "Unread" }}
          </button>
        </div>

        <div v-bind="api.getItemContentProps({ value: message.id })">
          <strong>{{ formatSender(message) }}</strong>
          <span>{{ message.subject }}</span>
        </div>

        <div v-bind="api.getItemActionsProps({ value: message.id, side: 'end' })">
          <button
            v-bind="
              mergeProps(api.getItemActionProps({ value: message.id, side: 'end' }), {
                onClick: () => update(message.id, { flagged: !message.flagged }),
              })
            "
            data-tone="amber"
          >
            {{ message.flagged ? "Unflag" : "Flag" }}
          </button>
          <button
            v-bind="
              mergeProps(api.getItemActionProps({ value: message.id, side: 'end' }), {
                onClick: () => remove(message.id),
              })
            "
            data-tone="red"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>

    <output data-testid="open-item">{{ formatOpenItem(api.openItem) }}</output>
    <output data-testid="log">{{ log }}</output>
  </main>
</template>
