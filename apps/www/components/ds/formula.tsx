import type { ReactNode } from "react"
import { styled } from "styled-system/jsx"

export const Term = styled("span", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    h: "9",
    px: "3.5",
    borderWidth: "1px",
    borderRadius: "full",
    bg: "bg",
    fontFamily: "mono",
    textStyle: "sm",
    color: "fg",
  },
})

export function Formula({ children }: { children: ReactNode }) {
  return (
    <styled.div
      className="not-prose"
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      gap="2"
      my="6"
      px="6"
      py="12"
      borderRadius="l3"
      bg="bg.subtle"
      color="fg.muted"
      fontFamily="mono"
    >
      {children}
    </styled.div>
  )
}
