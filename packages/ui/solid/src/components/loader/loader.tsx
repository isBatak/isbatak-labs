import { AbsoluteCenter, styled } from "@isbatak/solid-ui/jsx"
import { type ComponentProps, type JSX, Match, mergeProps, Show, splitProps, Switch } from "solid-js"

import { Spinner } from "../spinner"

const Contents = styled("span", { base: { display: "contents" } })

const HiddenContents = styled("span", { base: { display: "contents", visibility: "hidden" } })

export interface LoaderProps extends ComponentProps<typeof Contents> {
  visible?: boolean | undefined
  spinner?: JSX.Element | undefined
  spinnerPlacement?: "start" | "end" | undefined
  text?: JSX.Element | undefined
}

export function Loader(props: LoaderProps) {
  const [local, rest] = splitProps(mergeProps({ spinnerPlacement: "start", visible: true }, props), [
    "spinner",
    "spinnerPlacement",
    "children",
    "text",
    "visible",
  ])

  const hasSpinner = () => local.spinner === undefined || !!local.spinner
  const spinner = () =>
    local.spinner === undefined ? <Spinner size="inherit" borderWidth="0.125em" color="inherit" /> : local.spinner

  return (
    <Show when={local.visible} fallback={local.children}>
      <Switch fallback={<Contents {...rest}>{local.children}</Contents>}>
        <Match when={local.text}>
          <Contents {...rest}>
            <Show when={local.spinnerPlacement === "start"}>{spinner()}</Show>
            {local.text}
            <Show when={local.spinnerPlacement === "end"}>{spinner()}</Show>
          </Contents>
        </Match>
        <Match when={hasSpinner()}>
          <Contents {...rest}>
            <AbsoluteCenter as="span" display="inline-flex">
              {spinner()}
            </AbsoluteCenter>
            <HiddenContents>{local.children}</HiddenContents>
          </Contents>
        </Match>
      </Switch>
    </Show>
  )
}
