import { dataAttr } from "@ark-ui/solid/utils"
import { type ComponentProps, Show, splitProps } from "solid-js"
import { radiomark } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/solid-ui/jsx"

const StyledRadiomark = styled("span", radiomark)

export interface RadiomarkProps extends ComponentProps<typeof StyledRadiomark> {
  checked?: boolean | undefined
  disabled?: boolean | undefined
}

export function Radiomark(props: RadiomarkProps) {
  const [local, rest] = splitProps(props, ["checked", "disabled"])
  return (
    <StyledRadiomark
      data-state={local.checked ? "checked" : "unchecked"}
      data-disabled={dataAttr(local.disabled)}
      {...rest}
    >
      <Show when={local.checked}>
        <span class="dot" />
      </Show>
    </StyledRadiomark>
  )
}
