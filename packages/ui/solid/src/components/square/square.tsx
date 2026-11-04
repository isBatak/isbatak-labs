import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, createMemo, splitProps } from "solid-js"
import { type SquareProperties, square } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/solid-ui/jsx"

const StyledSquare = styled(ark.div)

export interface SquareProps
  extends Omit<ComponentProps<typeof StyledSquare>, keyof SquareProperties>, SquareProperties {}

export function Square(props: SquareProps) {
  const [patternProps, rest] = splitProps(props, square.propKeys)
  const styles = createMemo(() => square.raw(patternProps))
  return <StyledSquare {...styles()} {...rest} />
}
