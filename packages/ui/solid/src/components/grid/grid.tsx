import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, createMemo, splitProps } from "solid-js"
import { type GridProperties, type GridItemProperties, grid, gridItem } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/solid-ui/jsx"

const StyledGrid = styled(ark.div)

export interface GridProps extends Omit<ComponentProps<typeof StyledGrid>, keyof GridProperties>, GridProperties {}

export function Grid(props: GridProps) {
  const [patternProps, rest] = splitProps(props, grid.propKeys)
  const styles = createMemo(() => grid.raw(patternProps))
  return <StyledGrid {...(styles() as ComponentProps<typeof StyledGrid>)} {...rest} />
}

const StyledGridItem = styled(ark.div)

export interface GridItemProps
  extends Omit<ComponentProps<typeof StyledGridItem>, keyof GridItemProperties>, GridItemProperties {}

export function GridItem(props: GridItemProps) {
  const [patternProps, rest] = splitProps(props, gridItem.propKeys)
  const styles = createMemo(() => gridItem.raw(patternProps))
  return <StyledGridItem {...(styles() as ComponentProps<typeof StyledGridItem>)} {...rest} />
}
