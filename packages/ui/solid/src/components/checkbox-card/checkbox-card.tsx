import { Checkbox, useCheckboxContext } from "@ark-ui/solid/checkbox"
import { ark } from "@ark-ui/solid/factory"
import { dataAttr } from "@ark-ui/solid/utils"
import { type ComponentProps, Match, Switch } from "solid-js"
import { checkboxCard } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"

const { withProvider, withContext } = createSlotRecipeContext(checkboxCard)

export const CheckboxCardRoot = withProvider(Checkbox.Root, "root")
export type CheckboxCardRootProps = ComponentProps<typeof CheckboxCardRoot>

export const CheckboxCardRootProvider = withProvider(Checkbox.RootProvider, "root")
export type CheckboxCardRootProviderProps = ComponentProps<typeof CheckboxCardRootProvider>

export const CheckboxCardControl = withContext(ark.div, "control")
export type CheckboxCardControlProps = ComponentProps<typeof CheckboxCardControl>

export const CheckboxCardContent = withContext(ark.div, "content")
export type CheckboxCardContentProps = ComponentProps<typeof CheckboxCardContent>

export const CheckboxCardLabel = withContext(Checkbox.Label, "label")
export type CheckboxCardLabelProps = ComponentProps<typeof CheckboxCardLabel>

export const CheckboxCardDescription = withContext(ark.div, "description")
export type CheckboxCardDescriptionProps = ComponentProps<typeof CheckboxCardDescription>

function CheckboxCardMark(props: ComponentProps<"svg">) {
  const api = useCheckboxContext()
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3px"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      data-state={api().indeterminate ? "indeterminate" : api().checked ? "checked" : "unchecked"}
      data-disabled={dataAttr(api().disabled)}
      {...props}
    >
      <Switch>
        <Match when={api().indeterminate}>
          <path d="M5 12h14" />
        </Match>
        <Match when={api().checked}>
          <polyline points="20 6 9 17 4 12" />
        </Match>
      </Switch>
    </svg>
  )
}

export const CheckboxCardIndicator = withContext(CheckboxCardMark, "indicator")
export type CheckboxCardIndicatorProps = ComponentProps<typeof CheckboxCardIndicator>

export const CheckboxCardAddon = withContext(ark.div, "addon")
export type CheckboxCardAddonProps = ComponentProps<typeof CheckboxCardAddon>

export const CheckboxCardHiddenInput = Checkbox.HiddenInput
export type CheckboxCardHiddenInputProps = Checkbox.HiddenInputProps

export const CheckboxCardContext = Checkbox.Context
export type CheckboxCardContextProps = Checkbox.ContextProps
