import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"

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
  const { fit = "cover", align, ...rest } = props
  return <StyledImage objectFit={fit} objectPosition={align} {...rest} />
}
