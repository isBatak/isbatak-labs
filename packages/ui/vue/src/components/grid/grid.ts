import { ark } from "@ark-ui/vue/factory"
import { type GridProperties, type GridItemProperties, grid, gridItem } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, computed, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { patternProps } from "../../utils/pattern-props"

const StyledGrid = styled(ark.div)

export interface GridProps extends GridProperties, Omit<ComponentProps<typeof StyledGrid>, keyof GridProperties> {}

export const Grid = defineComponent({
  name: "Grid",
  inheritAttrs: false,
  props: patternProps(grid.propKeys, ["inline"]),
  setup(props, { attrs, slots }) {
    const styles = computed(() => grid.raw(props as Parameters<typeof grid.raw>[0]))
    return () => h(StyledGrid, { ...styles.value, ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<GridProps>

const StyledGridItem = styled(ark.div)

export interface GridItemProps
  extends GridItemProperties, Omit<ComponentProps<typeof StyledGridItem>, keyof GridItemProperties> {}

export const GridItem = defineComponent({
  name: "GridItem",
  inheritAttrs: false,
  props: patternProps(gridItem.propKeys),
  setup(props, { attrs, slots }) {
    const styles = computed(() => gridItem.raw(props as Parameters<typeof gridItem.raw>[0]))
    return () => h(StyledGridItem, { ...styles.value, ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<GridItemProps>
