"use client"

import { dataAttr } from "@ark-ui/react/utils"
import { styled } from "@isbatak/panda-ds/jsx"
import { group } from "@isbatak/panda-ds/recipes"
import {
  Children,
  type ComponentProps,
  type CSSProperties,
  type ReactElement,
  cloneElement,
  isValidElement,
  memo,
  useMemo,
} from "react"

const StyledGroup = styled("div", group)

export interface GroupProps extends ComponentProps<typeof StyledGroup> {
  skip?: ((child: ReactElement) => boolean | undefined) | undefined
}

export const Group = memo(function Group(props: GroupProps) {
  const { children, skip, ...rest } = props

  const items = useMemo(() => {
    const childArray = Children.toArray(children).filter(isValidElement)
    if (childArray.length === 1) return childArray

    const validChildArray = childArray.filter((child) => !skip?.(child))
    const validChildCount = validChildArray.length
    if (validChildCount === 1) return childArray

    return childArray.map((child) => {
      if (skip?.(child)) return child
      const index = validChildArray.indexOf(child)
      const { style } = child.props as { style?: CSSProperties }
      return cloneElement(child, {
        "data-group-item": "",
        "data-first": dataAttr(index === 0),
        "data-last": dataAttr(index === validChildCount - 1),
        "data-between": dataAttr(index > 0 && index < validChildCount - 1),
        style: { "--group-count": validChildCount, "--group-index": index, ...style },
      } as Record<string, unknown>)
    })
  }, [children, skip])

  return <StyledGroup {...rest}>{items}</StyledGroup>
})
