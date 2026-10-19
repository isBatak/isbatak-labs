import { Button, type ButtonProps } from "./button"

export type IconButtonProps = ButtonProps

export function IconButton(props: IconButtonProps) {
  return <Button icon {...props} />
}
