import { ark } from "@ark-ui/vue/factory"
import { skipNavLink } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/vue-ui/jsx"
import { type Component, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

const skipNavContentId = "skip-nav"

const StyledSkipNavLink = styled(ark.a, skipNavLink)

export type SkipNavLinkProps = Omit<ComponentProps<typeof StyledSkipNavLink>, "id" | "href"> & {
  /**
   * The id of the `SkipNavContent` the link jumps to.
   * @default "skip-nav"
   */
  id?: string | undefined
}

export const SkipNavLink = defineComponent({
  name: "SkipNavLink",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => {
      const { id, ...rest } = attrs
      return h(
        StyledSkipNavLink as Component,
        { ...rest, href: `#${(id as string | undefined) ?? skipNavContentId}` },
        slots,
      )
    }
  },
}) as unknown as Component<SkipNavLinkProps>

export const SkipNavContent = styled(
  ark.div,
  { base: { outline: "[0]" } },
  { defaultProps: { id: skipNavContentId, tabIndex: -1 } },
)
export type SkipNavContentProps = ComponentProps<typeof SkipNavContent>
