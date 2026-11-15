<script setup lang="ts">
import { JsonTreeView } from "@isbatak/vue-ui/json-tree-view"

const testArray = [1, 2, 3, 4, 5]
Object.defineProperties(testArray, {
  customProperty: { value: "custom value", enumerable: false, writable: false },
  anotherProperty: { value: 42, enumerable: false, writable: false },
})

const sparseArray: string[] = []
sparseArray[0] = "first"
sparseArray[5] = "sixth"

const data = {
  normalArray: [1, 2, 3],
  arrayWithNonEnumerableProperties: testArray,
  sparseArray,
}
</script>

<template>
  <JsonTreeView.Root :defaultExpandedDepth="1" :data="data">
    <JsonTreeView.Tree />
  </JsonTreeView.Root>
</template>
