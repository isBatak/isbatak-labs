import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { skeleton } from "@isbatak/panda-ds/recipes"

import { Circle, type CircleProps } from "../circle"
import { Stack, type StackProps } from "../stack"

export const Skeleton = styled(ark.div, skeleton)

export type SkeletonProps = ComponentProps<typeof Skeleton>

export interface SkeletonCircleProps extends SkeletonProps {
  /**
   * The width and height of the circle.
   */
  size?: CircleProps["size"] | undefined
}

export function SkeletonCircle(props: SkeletonCircleProps) {
  const { size, ...rest } = props
  return (
    <Circle size={size} asChild>
      <Skeleton {...rest} />
    </Circle>
  )
}

export interface SkeletonTextProps extends SkeletonProps {
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

export function SkeletonText(props: SkeletonTextProps) {
  const { noOfLines = 3, rootProps, ...rest } = props
  return (
    <Stack gap="0" width="full" {...rootProps}>
      {Array.from({ length: noOfLines }, (_, index) => (
        <Skeleton key={index} _last={{ maxW: noOfLines === 1 ? "full" : "[80%]" }} {...rest} />
      ))}
    </Stack>
  )
}
