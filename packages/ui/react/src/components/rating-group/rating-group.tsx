"use client"

import { ark } from "@ark-ui/react/factory"
import { RatingGroup, useRatingGroupContext, useRatingGroupItemContext } from "@ark-ui/react/rating-group"
import type { ComponentProps, ReactElement } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { ratingGroup } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon/icon"

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

export type RatingGroupItemIndicatorProps = ComponentProps<typeof StyledRatingGroupItemIndicator> & {
  /**
   * The icon to draw for the item, filled up to the rating. A filled star by default.
   */
  icon?: ReactElement | undefined
}

export function RatingGroupItemIndicator({ icon, ...props }: RatingGroupItemIndicatorProps) {
  const item = useRatingGroupItemContext()
  return (
    <StyledRatingGroupItemIndicator
      data-highlighted={item.highlighted ? "" : undefined}
      data-checked={item.checked ? "" : undefined}
      data-half={item.half ? "" : undefined}
      {...props}
    >
      <ark.span asChild data-bg="">
        {icon ?? <Icon name="star-filled" />}
      </ark.span>
      <ark.span asChild data-fg="">
        {icon ?? <Icon name="star-filled" />}
      </ark.span>
    </StyledRatingGroupItemIndicator>
  )
}

export type RatingGroupItemsProps = Omit<RatingGroupItemProps, "index"> & {
  /**
   * The icon to draw for each item. A filled star by default.
   */
  icon?: ReactElement | undefined
}

export function RatingGroupItems({ icon, ...props }: RatingGroupItemsProps) {
  const ratingGroup = useRatingGroupContext()
  return ratingGroup.items.map((index) => (
    <RatingGroupItem key={index} index={index} {...props}>
      <RatingGroupItemIndicator icon={icon} />
    </RatingGroupItem>
  ))
}

export const RatingGroupHiddenInput = RatingGroup.HiddenInput
export type RatingGroupHiddenInputProps = ComponentProps<typeof RatingGroupHiddenInput>

export const RatingGroupContext = RatingGroup.Context
export type RatingGroupContextProps = RatingGroup.ContextProps

export const RatingGroupItemContext = RatingGroup.ItemContext
export type RatingGroupItemContextProps = RatingGroup.ItemContextProps
