import { ark } from "@ark-ui/solid/factory"
import { skipNavLink } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/solid-ui/jsx"
import { type ComponentProps, splitProps } from "solid-js"

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
  const [local, rest] = splitProps(props, ["id"])
  return <StyledSkipNavLink {...rest} href={`#${local.id ?? skipNavContentId}`} />
}

export const SkipNavContent = styled(
  ark.div,
  { base: { outline: "[0]" } },
  { defaultProps: { id: skipNavContentId, tabIndex: -1 } },
)
export type SkipNavContentProps = ComponentProps<typeof SkipNavContent>
