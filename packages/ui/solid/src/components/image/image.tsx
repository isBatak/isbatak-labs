import { ark } from "@ark-ui/solid/factory"
import { styled } from "@isbatak/solid-ui/jsx"
import { type ComponentProps, splitProps } from "solid-js"

const StyledImage = styled(ark.img)

export interface ImageProps extends Omit<ComponentProps<typeof StyledImage>, "align"> {
  /**
   * How the image fits within its bounds. Maps to `object-fit`.
   * @default "cover"
   */
  fit?: ComponentProps<typeof StyledImage>["objectFit"]
  /**
   * How the image is aligned within its bounds. Maps to `object-position`.
   */
  align?: ComponentProps<typeof StyledImage>["objectPosition"]
}

export function Image(props: ImageProps) {
  const [local, rest] = splitProps(props, ["fit", "align"])
  return <StyledImage objectFit={local.fit ?? "cover"} objectPosition={local.align} {...rest} />
}
