import { ark } from "@ark-ui/vue/factory"
import { skeleton } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, type PropType, defineComponent, h, type VNode } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { Circle, type CircleProps } from "../circle"
import { Stack, type StackProps } from "../stack"

const render = h as unknown as (type: unknown, props: Record<string, unknown>, children?: unknown) => VNode

export const Skeleton = styled(ark.div, skeleton)

export type SkeletonProps = ComponentProps<typeof Skeleton>

export type SkeletonCircleProps = SkeletonProps & {
  /**
   * The width and height of the circle.
   */
  size?: CircleProps["size"] | undefined
}

export const SkeletonCircle = defineComponent({
  name: "SkeletonCircle",
  inheritAttrs: false,
  props: {
    size: { type: String as PropType<string>, default: undefined },
  },
  setup(props, { attrs, slots }) {
    return () => {
      return render(Circle, { size: props.size, asChild: true }, () => render(Skeleton, attrs, slots))
    }
  },
}) as unknown as FunctionalComponent<SkeletonCircleProps>

export type SkeletonTextProps = SkeletonProps & {
  /**
   * The number of lines to render. The last line is shorter.
   * @default 3
   */
  noOfLines?: number | undefined
  /**
   * Props for the stack that wraps the lines.
   */
  rootProps?: StackProps | undefined
}

export const SkeletonText = defineComponent({
  name: "SkeletonText",
  inheritAttrs: false,
  props: {
    noOfLines: { type: Number, default: 3 },
    rootProps: { type: Object as PropType<StackProps>, default: undefined },
  },
  setup(props, { attrs }) {
    return () =>
      render(Stack, { gap: "0", width: "full", ...props.rootProps }, () =>
        Array.from({ length: props.noOfLines }, (_, index) =>
          render(Skeleton, {
            key: index,
            _last: { maxW: props.noOfLines === 1 ? "full" : "[80%]" },
            ...attrs,
          }),
        ),
      )
  },
}) as unknown as FunctionalComponent<SkeletonTextProps>
