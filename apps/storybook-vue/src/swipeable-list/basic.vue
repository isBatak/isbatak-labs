<script setup lang="ts">
import { cx } from "@isbatak/panda-ds/css"
import { swipeableList as swipeableListRecipe } from "@isbatak/panda-ds/recipes"
import {
  formatOpenItem,
  formatSender,
  initialMessages,
  swipeableListArgs,
  swipeableListClasses as classes,
  type Message,
} from "@isbatak/storybook-shared"
import * as swipeableList from "@isbatak/zag-swipeable-list"
import { mergeProps, normalizeProps, useMachine } from "@zag-js/vue"
import { computed, ref, useId } from "vue"

const styles = swipeableListRecipe()

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
  <main :class="classes.story">
    <ul v-bind="api.getRootProps()" :class="styles.root">
      <li
        v-for="message in messages"
        :key="message.id"
        v-bind="api.getItemProps({ value: message.id })"
        :class="styles.item"
      >
        <div v-bind="api.getItemActionsProps({ value: message.id, side: 'start' })" :class="styles.itemActions">
          <button
            v-bind="
              mergeProps(api.getItemActionProps({ value: message.id, side: 'start' }), {
                onClick: () => update(message.id, { unread: !message.unread }),
              })
            "
            :class="cx(styles.itemAction, classes.blue)"
          >
            {{ message.unread ? "Read" : "Unread" }}
          </button>
        </div>

        <div v-bind="api.getItemContentProps({ value: message.id })" :class="styles.itemContent">
          <strong>{{ formatSender(message) }}</strong>
          <span :class="classes.subject">{{ message.subject }}</span>
        </div>

        <div v-bind="api.getItemActionsProps({ value: message.id, side: 'end' })" :class="styles.itemActions">
          <button
            v-bind="
              mergeProps(api.getItemActionProps({ value: message.id, side: 'end' }), {
                onClick: () => update(message.id, { flagged: !message.flagged }),
              })
            "
            :class="cx(styles.itemAction, classes.orange)"
          >
            {{ message.flagged ? "Unflag" : "Flag" }}
          </button>
          <button
            v-bind="
              mergeProps(api.getItemActionProps({ value: message.id, side: 'end' }), {
                onClick: () => remove(message.id),
              })
            "
            :class="cx(styles.itemAction, classes.red)"
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
