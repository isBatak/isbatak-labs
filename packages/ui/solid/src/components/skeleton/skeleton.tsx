import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, splitProps } from "solid-js"
import { skeleton } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/solid-ui/jsx"

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
  const [local, rest] = splitProps(props, ["size"])
  return <Circle size={local.size} asChild={(circleProps) => <Skeleton {...circleProps} {...rest} />} />
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
  const [local, rest] = splitProps(props, ["noOfLines", "rootProps"])
  const lines = () => local.noOfLines ?? 3
  return (
    <Stack gap="0" width="full" {...local.rootProps}>
      {Array.from({ length: lines() }, () => (
        <Skeleton _last={{ maxW: lines() === 1 ? "full" : "[80%]" }} {...rest} />
      ))}
    </Stack>
  )
}
