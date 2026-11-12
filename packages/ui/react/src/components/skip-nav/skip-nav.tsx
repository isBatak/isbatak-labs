import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { skipNavLink } from "@isbatak/panda-ds/recipes"

const skipNavContentId = "skip-nav"

const StyledSkipNavLink = styled(ark.a, skipNavLink)

export interface SkipNavLinkProps extends Omit<ComponentProps<typeof StyledSkipNavLink>, "id" | "href"> {
  /**
   * The id of the `SkipNavContent` the link jumps to.
   * @default "skip-nav"
   */
  id?: string | undefined
}

export function SkipNavLink(props: SkipNavLinkProps) {
  const { id = skipNavContentId, ...rest } = props
  return <StyledSkipNavLink {...rest} href={`#${id}`} />
}

export const SkipNavContent = styled(
  ark.div,
  { base: { outline: "[0]" } },
  { defaultProps: { id: skipNavContentId, tabIndex: -1 } },
)
export type SkipNavContentProps = ComponentProps<typeof SkipNavContent>
