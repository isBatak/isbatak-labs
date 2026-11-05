import { dataAttr } from "@ark-ui/react/utils"
import type { ComponentProps } from "react"
import { cx } from "@isbatak/panda-ds/css"
import { type CheckmarkVariantProps, checkmark } from "@isbatak/panda-ds/recipes"

export interface CheckmarkProps extends ComponentProps<"svg">, CheckmarkVariantProps {
  checked?: boolean | undefined
  indeterminate?: boolean | undefined
  disabled?: boolean | undefined
}

export function Checkmark({ checked, indeterminate, disabled, className, ...props }: CheckmarkProps) {
  const [variantProps, rest] = checkmark.splitVariantProps(props)
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3px"
      strokeLinecap="round"
      strokeLinejoin="round"
      data-state={indeterminate ? "indeterminate" : checked ? "checked" : "unchecked"}
      data-disabled={dataAttr(disabled)}
      {...rest}
      className={cx(checkmark(variantProps), className)}
    >
      {indeterminate ? <path d="M5 12h14" /> : checked ? <polyline points="20 6 9 17 4 12" /> : null}
    </svg>
  )
}
