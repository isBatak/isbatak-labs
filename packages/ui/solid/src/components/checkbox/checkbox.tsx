import { Checkbox, useCheckboxContext } from "@ark-ui/solid/checkbox"
import { type ComponentProps, Match, Switch, splitProps } from "solid-js"
import { checkbox } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext, styled } from "@isbatak/solid-ui/jsx"

const { withProvider, withContext } = createSlotRecipeContext(checkbox)

export const CheckboxRoot = withProvider(Checkbox.Root, "root")
export type CheckboxRootProps = ComponentProps<typeof CheckboxRoot>

export const CheckboxRootProvider = withProvider(Checkbox.RootProvider, "root")
export type CheckboxRootProviderProps = ComponentProps<typeof CheckboxRootProvider>

export const CheckboxLabel = withContext(Checkbox.Label, "label")
export type CheckboxLabelProps = ComponentProps<typeof CheckboxLabel>

function CheckboxMark(props: ComponentProps<"svg">) {
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

export const CheckboxIndicator = withContext(CheckboxMark, "indicator")
export type CheckboxIndicatorProps = ComponentProps<typeof CheckboxIndicator>

const StyledCheckboxControl = withContext(Checkbox.Control, "control")

export type CheckboxControlProps = ComponentProps<typeof StyledCheckboxControl>
export function CheckboxControl(props: CheckboxControlProps) {
  const [local, rest] = splitProps(props, ["children"])
  return <StyledCheckboxControl {...rest}>{local.children ?? <CheckboxIndicator />}</StyledCheckboxControl>
}

export const CheckboxGroup = styled(Checkbox.Group, {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
  },
})
export type CheckboxGroupProps = ComponentProps<typeof CheckboxGroup>

export const CheckboxHiddenInput = Checkbox.HiddenInput
export type CheckboxHiddenInputProps = Checkbox.HiddenInputProps

export const CheckboxContext = Checkbox.Context
export type CheckboxContextProps = Checkbox.ContextProps
