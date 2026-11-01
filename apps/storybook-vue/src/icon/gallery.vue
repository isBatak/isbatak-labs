<script setup lang="ts">
import { Icon, iconNames } from "@isbatak/vue-ui/icon"
import { iconClasses as classes, filterIconNames } from "@isbatak/storybook-shared"
import { computed, ref } from "vue"

const query = ref("")
const names = computed(() => filterIconNames(query.value))
</script>

<template>
  <div :class="classes.gallery">
    <input
      v-model="query"
      type="search"
      aria-label="Search icons"
      :placeholder="`Search ${iconNames.length} icons`"
      :class="classes.search"
    />
    <p v-if="names.length === 0" :class="classes.empty">No icons match “{{ query }}”</p>
    <div :class="classes.grid">
      <div v-for="name in names" :key="name" :class="classes.cell">
        <Icon :name="name" size="lg" />
        <span :class="classes.name">{{ name }}</span>
      </div>
    </div>
  </div>
</template>
