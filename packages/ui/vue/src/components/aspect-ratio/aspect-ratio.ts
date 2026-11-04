import { ark } from "@ark-ui/vue/factory"
import { type AspectRatioProperties, aspectRatio } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, computed, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { patternProps } from "../../utils/pattern-props"

const StyledAspectRatio = styled(ark.div)

export interface AspectRatioProps
  extends AspectRatioProperties, Omit<ComponentProps<typeof StyledAspectRatio>, keyof AspectRatioProperties> {}

export const AspectRatio = defineComponent({
  name: "AspectRatio",
  inheritAttrs: false,
  props: patternProps(aspectRatio.propKeys),
  setup(props, { attrs, slots }) {
    const styles = computed(() => aspectRatio.raw(props as Parameters<typeof aspectRatio.raw>[0]))
    return () => h(StyledAspectRatio, { ...styles.value, ...attrs }, slots)
  },
}) as unknown as FunctionalComponent<AspectRatioProps>
