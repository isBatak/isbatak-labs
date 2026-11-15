<script setup lang="ts">
import { JsonTreeView } from "@isbatak/vue-ui/json-tree-view"
import { Link } from "@isbatak/vue-ui/link"

const data = {
  name: "John Doe",
  age: 30,
  number: Number.NaN,
  email: "john.doe@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
}

const unquote = (value: string) => value.replace(/^"(.*)"$/, "$1")

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(unquote(value))
</script>

<template>
  <JsonTreeView.Root :defaultExpandedDepth="2" :data="data">
    <JsonTreeView.Tree>
      <template #renderValue="{ node }">
        <Link
          v-if="node.type === 'text' && typeof node.value === 'string' && isEmail(node.value)"
          :href="`mailto:${unquote(node.value)}`"
          target="_blank"
          rel="noreferrer"
        >
          {{ node.value }}
        </Link>
        <template v-else>{{ node.value }}</template>
      </template>
    </JsonTreeView.Tree>
  </JsonTreeView.Root>
</template>
