import { dataAttr } from "@ark-ui/solid/utils"
import { styled } from "@isbatak/ui-solid/jsx"
import { group } from "@isbatak/panda-ds/recipes"
import { children, type ComponentProps, createRenderEffect, splitProps } from "solid-js"

const StyledGroup = styled("div", group)

export interface GroupProps extends ComponentProps<typeof StyledGroup> {
  skip?: ((child: HTMLElement) => boolean | undefined) | undefined
}

function setDataAttr(element: HTMLElement, name: string, value: boolean) {
  if (dataAttr(value) === undefined) element.removeAttribute(name)
  else element.setAttribute(name, "")
}

export function Group(props: GroupProps) {
  const [local, rest] = splitProps(props, ["children", "skip"])
  const resolved = children(() => local.children)

  createRenderEffect(() => {
    const childArray = resolved.toArray().filter((child): child is HTMLElement => child instanceof HTMLElement)
    if (childArray.length === 1) return

    const validChildArray = childArray.filter((child) => !local.skip?.(child))
    const validChildCount = validChildArray.length
    if (validChildCount === 1) return

    validChildArray.forEach((child, index) => {
      child.setAttribute("data-group-item", "")
      setDataAttr(child, "data-first", index === 0)
      setDataAttr(child, "data-last", index === validChildCount - 1)
      setDataAttr(child, "data-between", index > 0 && index < validChildCount - 1)
      child.style.setProperty("--group-count", String(validChildCount))
      child.style.setProperty("--group-index", String(index))
    })
  })

  return <StyledGroup {...rest}>{resolved()}</StyledGroup>
}
