import { ark } from "@ark-ui/vue/factory"
import { RatingGroup, useRatingGroupContext, useRatingGroupItemContext } from "@ark-ui/vue/rating-group"
import { type Component, type VNode, cloneVNode, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { ratingGroup } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon"

const { withProvider, withContext } = createSlotRecipeContext(ratingGroup)

export const RatingGroupRoot = withProvider(RatingGroup.Root, "root")
export type RatingGroupRootProps = ComponentProps<typeof RatingGroupRoot>

export const RatingGroupRootProvider = withProvider(RatingGroup.RootProvider, "root")
export type RatingGroupRootProviderProps = ComponentProps<typeof RatingGroupRootProvider>

export const RatingGroupLabel = withContext(RatingGroup.Label, "label")
export type RatingGroupLabelProps = ComponentProps<typeof RatingGroupLabel>

export const RatingGroupControl = withContext(RatingGroup.Control, "control")
export type RatingGroupControlProps = ComponentProps<typeof RatingGroupControl>

export const RatingGroupItem = withContext(RatingGroup.Item, "item")
export type RatingGroupItemProps = ComponentProps<typeof RatingGroupItem>

const StyledRatingGroupItemIndicator = withContext(ark.span, "itemIndicator")
export type RatingGroupItemIndicatorProps = ComponentProps<typeof StyledRatingGroupItemIndicator>

const layer = (icon: VNode | undefined, attr: "data-bg" | "data-fg") =>
  icon ? cloneVNode(icon, { [attr]: "" }) : h(Icon, { name: "star-filled", [attr]: "" })

export const RatingGroupItemIndicator = defineComponent({
  name: "RatingGroupItemIndicator",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const item = useRatingGroupItemContext()
    return () => {
      const icon = slots.icon?.()[0]
      return h(
        StyledRatingGroupItemIndicator as Component,
        {
          "data-highlighted": item.value.highlighted ? "" : undefined,
          "data-checked": item.value.checked ? "" : undefined,
          "data-half": item.value.half ? "" : undefined,
          ...attrs,
        },
        () => [layer(icon, "data-bg"), layer(icon, "data-fg")],
      )
    }
  },
}) as unknown as typeof StyledRatingGroupItemIndicator

export type RatingGroupItemsProps = Omit<RatingGroupItemProps, "index">

export const RatingGroupItems = defineComponent({
  name: "RatingGroupItems",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const ratingGroup = useRatingGroupContext()
    return () =>
      ratingGroup.value.items.map((index) =>
        h(RatingGroupItem as Component, { key: index, index, ...attrs }, () =>
          h(RatingGroupItemIndicator as Component, null, { icon: slots.icon }),
        ),
      )
  },
}) as unknown as Component<RatingGroupItemsProps>

export const RatingGroupHiddenInput = RatingGroup.HiddenInput
export type RatingGroupHiddenInputProps = ComponentProps<typeof RatingGroupHiddenInput>

export const RatingGroupContext = RatingGroup.Context
export type RatingGroupContextProps = ComponentProps<typeof RatingGroupContext>

export const RatingGroupItemContext = RatingGroup.ItemContext
export type RatingGroupItemContextProps = ComponentProps<typeof RatingGroupItemContext>
