import { dataAttr } from "@ark-ui/react/utils"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { radiomark } from "@isbatak/panda-ds/recipes"

const StyledRadiomark = styled("span", radiomark)

export interface RadiomarkProps extends ComponentProps<typeof StyledRadiomark> {
  checked?: boolean | undefined
  disabled?: boolean | undefined
}

export function Radiomark({ checked, disabled, ...props }: RadiomarkProps) {
  return (
    <StyledRadiomark data-state={checked ? "checked" : "unchecked"} data-disabled={dataAttr(disabled)} {...props}>
      {checked && <span className="dot" />}
    </StyledRadiomark>
  )
}
