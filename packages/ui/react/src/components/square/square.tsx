import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { styled } from "@isbatak/panda-ds/jsx"
import { type SquareProperties, square } from "@isbatak/panda-ds/patterns"

const StyledSquare = styled(ark.div)

export interface SquareProps
  extends Omit<ComponentProps<typeof StyledSquare>, keyof SquareProperties>, SquareProperties {}

export function Square(props: SquareProps) {
  const [patternProps, rest] = splitProps(props, square.propKeys)
  return <StyledSquare {...square.raw(patternProps)} {...rest} />
}
