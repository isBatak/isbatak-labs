"use client"

import { Button, type ButtonProps } from "./button"

export type IconButtonProps = ButtonProps

export function IconButton(props: IconButtonProps) {
  return <Button px="0" py="0" _icon={{ fontSize: "1.2em" }} {...props} />
}
