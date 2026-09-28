import { styled } from "styled-system/jsx"

export const Kbd = styled("kbd", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minW: "6",
    h: "6",
    px: "1.5",
    borderRadius: "l1",
    borderWidth: "1px",
    borderBottomWidth: "2px",
    bg: "bg.subtle",
    fontFamily: "mono",
    fontSize: "0.8em",
    fontWeight: "medium",
    lineHeight: "1",
    color: "fg",
    verticalAlign: "0.1em",
  },
})
