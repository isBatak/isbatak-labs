import { ark } from "@ark-ui/solid/factory"
import { RatingGroup, useRatingGroupContext, useRatingGroupItemContext } from "@ark-ui/solid/rating-group"
import { type ComponentProps, For, type JSX, splitProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
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

export type RatingGroupIconProps = { "data-bg"?: "" | undefined; "data-fg"?: "" | undefined }

export type RatingGroupItemIndicatorProps = ComponentProps<typeof StyledRatingGroupItemIndicator> & {
  icon?: ((props: RatingGroupIconProps) => JSX.Element) | undefined
}

export function RatingGroupItemIndicator(props: RatingGroupItemIndicatorProps) {
  const [local, rest] = splitProps(props, ["icon"])
  const item = useRatingGroupItemContext()
  const layer = (attrs: RatingGroupIconProps) =>
    local.icon ? local.icon(attrs) : <Icon name="star-filled" {...attrs} />
  return (
    <StyledRatingGroupItemIndicator
      data-highlighted={item().highlighted ? "" : undefined}
      data-checked={item().checked ? "" : undefined}
      data-half={item().half ? "" : undefined}
      {...rest}
    >
      {layer({ "data-bg": "" })}
      {layer({ "data-fg": "" })}
    </StyledRatingGroupItemIndicator>
  )
}

export type RatingGroupItemsProps = Omit<RatingGroupItemProps, "index"> & {
  icon?: ((props: RatingGroupIconProps) => JSX.Element) | undefined
}

export function RatingGroupItems(props: RatingGroupItemsProps) {
  const [local, rest] = splitProps(props, ["icon"])
  const ratingGroup = useRatingGroupContext()
  return (
    <For each={ratingGroup().items}>
      {(index) => (
        <RatingGroupItem index={index} {...rest}>
          <RatingGroupItemIndicator icon={local.icon} />
        </RatingGroupItem>
      )}
    </For>
  )
}

export const RatingGroupHiddenInput = RatingGroup.HiddenInput
export type RatingGroupHiddenInputProps = ComponentProps<typeof RatingGroupHiddenInput>

export const RatingGroupContext = RatingGroup.Context
export type RatingGroupContextProps = ComponentProps<typeof RatingGroupContext>

export const RatingGroupItemContext = RatingGroup.ItemContext
export type RatingGroupItemContextProps = ComponentProps<typeof RatingGroupItemContext>
