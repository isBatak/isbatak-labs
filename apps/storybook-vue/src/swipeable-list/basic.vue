<script setup lang="ts">
import { cx } from "@isbatak/storybook-shared/css"
import { swipeableList as swipeableListRecipe } from "@isbatak/storybook-shared/recipes"
import {
  copyText,
  formatOpenItem,
  initialAccounts,
  swipeableListArgs,
  swipeableListClasses as classes,
  swipeableListIcons as icons,
  type Account,
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

const accounts = ref<Account[]>(initialAccounts)
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

function copy(account: Account) {
  void copyText(account.id)
  log.value = `Copied ${account.id}`
}

function remove(account: Account, action: string) {
  accounts.value = accounts.value.filter((item) => item.id !== account.id)
  log.value = `${action} ${account.name}`
}
</script>

<template>
  <main :class="classes.story">
    <ul v-bind="api.getRootProps()" :class="styles.root">
      <li
        v-for="account in accounts"
        :key="account.id"
        v-bind="api.getItemProps({ value: account.id })"
        :class="styles.item"
      >
        <div v-bind="api.getItemActionsProps({ value: account.id, side: 'start' })" :class="styles.itemActions">
          <button
            v-bind="
              mergeProps(api.getItemActionProps({ value: account.id, side: 'start' }), {
                onClick: () => copy(account),
              })
            "
            aria-label="Copy account ID"
            :class="cx(styles.itemAction, classes.copy)"
          >
            <span :class="classes.icon" v-html="icons.copy" />
          </button>
        </div>

        <div v-bind="api.getItemContentProps({ value: account.id })" :class="styles.itemContent">
          <span :class="classes.avatar" v-html="icons.account" />
          <span :class="classes.details">
            <span :class="classes.name">{{ account.name }}</span>
            <span :class="classes.id">{{ account.id }}</span>
          </span>
        </div>

        <div v-bind="api.getItemActionsProps({ value: account.id, side: 'end' })" :class="styles.itemActions">
          <button
            v-bind="
              mergeProps(api.getItemActionProps({ value: account.id, side: 'end' }), {
                onClick: () => remove(account, 'Archived'),
              })
            "
            aria-label="Archive"
            :class="cx(styles.itemAction, classes.archive)"
          >
            <span :class="classes.icon" v-html="icons.archive" />
          </button>
          <button
            v-bind="
              mergeProps(api.getItemActionProps({ value: account.id, side: 'end' }), {
                onClick: () => remove(account, 'Deleted'),
              })
            "
            aria-label="Delete"
            :class="cx(styles.itemAction, classes.delete)"
          >
            <span :class="classes.icon" v-html="icons.delete" />
          </button>
        </div>
      </li>
    </ul>

    <output data-testid="open-item">{{ formatOpenItem(api.openItem) }}</output>
    <output data-testid="log">{{ log }}</output>
  </main>
</template>
