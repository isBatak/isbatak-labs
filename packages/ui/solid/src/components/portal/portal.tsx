import { children, type ComponentProps, Show, splitProps } from "solid-js"
import { Portal as SolidPortal } from "solid-js/web"

export type PortalProps = ComponentProps<typeof SolidPortal>

export function Portal(props: PortalProps) {
  const [local, rest] = splitProps(props, ["children"])
  const resolved = children(() => local.children)
  return (
    <Show when={resolved.toArray().some((node) => node != null)}>
      <SolidPortal {...rest}>{resolved()}</SolidPortal>
    </Show>
  )
}
