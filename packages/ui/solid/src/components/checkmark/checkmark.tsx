import { dataAttr } from "@ark-ui/solid/utils"
import { type ComponentProps, Match, Switch, splitProps } from "solid-js"
import { checkmark } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/solid-ui/jsx"

const StyledCheckmark = styled("svg", checkmark)

export interface CheckmarkProps extends ComponentProps<typeof StyledCheckmark> {
  checked?: boolean | undefined
  indeterminate?: boolean | undefined
  disabled?: boolean | undefined
}

export function Checkmark(props: CheckmarkProps) {
  const [local, rest] = splitProps(props, ["checked", "indeterminate", "disabled"])
  return (
    <StyledCheckmark
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3px"
      stroke-linecap="round"
      stroke-linejoin="round"
      data-state={local.indeterminate ? "indeterminate" : local.checked ? "checked" : "unchecked"}
      data-disabled={dataAttr(local.disabled)}
      {...rest}
    >
      <Switch>
        <Match when={local.indeterminate}>
          <path d="M5 12h14" />
        </Match>
        <Match when={local.checked}>
          <polyline points="20 6 9 17 4 12" />
        </Match>
      </Switch>
    </StyledCheckmark>
  )
}
