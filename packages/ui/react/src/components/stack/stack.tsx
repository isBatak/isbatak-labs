import { ark } from "@ark-ui/react/factory"
import { Children, type ComponentProps, Fragment, isValidElement, type ReactElement, type ReactNode } from "react"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { styled } from "@isbatak/panda-ds/jsx"
import {
  type HstackProperties,
  type StackProperties,
  type VstackProperties,
  hstack,
  stack,
  vstack,
} from "@isbatak/panda-ds/patterns"

const StyledStack = styled(ark.div)

type StackElementProps = ComponentProps<typeof StyledStack>

interface SeparatorProp {
  separator?: boolean | ReactElement | undefined
}

export interface StackProps
  extends Omit<StackElementProps, keyof StackProperties>, Omit<StackProperties, "separator">, SeparatorProp {}

export interface HStackProps
  extends Omit<StackElementProps, keyof HstackProperties>, Omit<HstackProperties, "separator">, SeparatorProp {}

export interface VStackProps
  extends Omit<StackElementProps, keyof VstackProperties>, Omit<VstackProperties, "separator">, SeparatorProp {}

function separate(children: ReactNode, separator: ReactElement) {
  return Children.toArray(children)
    .filter(isValidElement)
    .map((child, index, all) => (
      <Fragment key={child.key ?? index}>
        {child}
        {index < all.length - 1 && separator}
      </Fragment>
    ))
}

export function Stack(props: StackProps) {
  const [{ separator, ...patternProps }, { children, ...rest }] = splitProps(props, stack.propKeys)
  const element = isValidElement(separator) ? separator : undefined
  return (
    <StyledStack {...stack.raw({ ...patternProps, separator: element ? undefined : separator })} {...rest}>
      {element ? separate(children, element) : children}
    </StyledStack>
  )
}

export function HStack(props: HStackProps) {
  const [{ separator, ...patternProps }, { children, ...rest }] = splitProps(props, hstack.propKeys)
  const element = isValidElement(separator) ? separator : undefined
  return (
    <StyledStack {...hstack.raw({ ...patternProps, separator: element ? undefined : separator })} {...rest}>
      {element ? separate(children, element) : children}
    </StyledStack>
  )
}

export function VStack(props: VStackProps) {
  const [{ separator, ...patternProps }, { children, ...rest }] = splitProps(props, vstack.propKeys)
  const element = isValidElement(separator) ? separator : undefined
  return (
    <StyledStack {...vstack.raw({ ...patternProps, separator: element ? undefined : separator })} {...rest}>
      {element ? separate(children, element) : children}
    </StyledStack>
  )
}

export const StackSeparator = styled(ark.div, {
  base: {
    alignSelf: "stretch",
    flexShrink: "0",
    minW: "[1px]",
    minH: "[1px]",
    bg: "border",
  },
})
export type StackSeparatorProps = ComponentProps<typeof StackSeparator>
