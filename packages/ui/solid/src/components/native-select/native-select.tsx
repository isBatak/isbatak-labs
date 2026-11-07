import { ark } from "@ark-ui/solid/factory"
import { Field } from "@ark-ui/solid/field"
import { type ComponentProps, splitProps } from "solid-js"
import { nativeSelect } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"

import { Icon } from "../icon"

const { withProvider, withContext } = createSlotRecipeContext(nativeSelect)

export const NativeSelectRoot = withProvider(ark.div, "root")
export type NativeSelectRootProps = ComponentProps<typeof NativeSelectRoot>

export const NativeSelectField = withContext(Field.Select, "field")
export type NativeSelectFieldProps = ComponentProps<typeof NativeSelectField>

const StyledNativeSelectIndicator = withContext(ark.div, "indicator")
export type NativeSelectIndicatorProps = ComponentProps<typeof StyledNativeSelectIndicator>

export function NativeSelectIndicator(props: NativeSelectIndicatorProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledNativeSelectIndicator {...rest}>
      {local.children ?? <Icon name="chevron-down" />}
    </StyledNativeSelectIndicator>
  )
}
