import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { styled } from "@isbatak/panda-ds/jsx"
import { type GridItemProperties, type GridProperties, grid, gridItem } from "@isbatak/panda-ds/patterns"

const StyledGrid = styled(ark.div)

export interface GridProps extends Omit<ComponentProps<typeof StyledGrid>, keyof GridProperties>, GridProperties {}

export function Grid(props: GridProps) {
  const [patternProps, rest] = splitProps(props, grid.propKeys)
  return <StyledGrid {...grid.raw(patternProps)} {...rest} />
}

export interface GridItemProps
  extends Omit<ComponentProps<typeof StyledGrid>, keyof GridItemProperties>, GridItemProperties {}

export function GridItem(props: GridItemProps) {
  const [patternProps, rest] = splitProps(props, gridItem.propKeys)
  return <StyledGrid {...gridItem.raw(patternProps)} {...rest} />
}
