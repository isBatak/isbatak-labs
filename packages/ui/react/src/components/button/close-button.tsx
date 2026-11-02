import { Icon } from "../icon/icon"
import { IconButton, type IconButtonProps } from "./icon-button"

export type CloseButtonProps = IconButtonProps

export function CloseButton(props: CloseButtonProps) {
  return (
    <IconButton variant="ghost" aria-label="Close" {...props}>
      {props.children ?? <Icon name="close" />}
    </IconButton>
  )
}
